// Package llm is a minimal Anthropic Messages API client: bounded timeouts,
// retries with exponential backoff + jitter on transient failures, streaming
// for the tutor, and a strict-JSON helper for the compiler. The Client
// interface lets tests substitute a deterministic fake.
package llm

import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log/slog"
	"math/rand"
	"net/http"
	"strings"
	"time"
)

// Message is a single conversation turn.
type Message struct {
	Role    string `json:"role"` // "user" | "assistant"
	Content string `json:"content"`
}

// Client is the LLM boundary used by the compiler and tutor.
type Client interface {
	// Complete returns the full assistant reply for the given conversation.
	Complete(ctx context.Context, system string, messages []Message, maxTokens int) (string, error)
	// Stream calls onDelta for each text fragment and returns the full reply.
	Stream(ctx context.Context, system string, messages []Message, maxTokens int, onDelta func(string)) (string, error)
	// Model reports the model id in use, recorded in provenance rows.
	Model() string
}

const (
	apiURL           = "https://api.anthropic.com/v1/messages"
	apiVersion       = "2023-06-01"
	maxAttempts      = 4
	baseBackoff      = 2 * time.Second
	maxResponseBytes = 4 << 20
)

// Anthropic is the production Client.
type Anthropic struct {
	APIKey  string
	ModelID string
	HTTP    *http.Client // must have a Timeout set by the caller
}

// New builds a production client with the given per-call timeout.
func New(apiKey, model string, timeout time.Duration) *Anthropic {
	return &Anthropic{APIKey: apiKey, ModelID: model, HTTP: &http.Client{Timeout: timeout}}
}

func (a *Anthropic) Model() string { return a.ModelID }

type apiRequest struct {
	Model     string    `json:"model"`
	System    string    `json:"system,omitempty"`
	Messages  []Message `json:"messages"`
	MaxTokens int       `json:"max_tokens"`
	Stream    bool      `json:"stream,omitempty"`
}

type apiResponse struct {
	Content []struct {
		Type string `json:"type"`
		Text string `json:"text"`
	} `json:"content"`
	Error *struct {
		Type    string `json:"type"`
		Message string `json:"message"`
	} `json:"error"`
}

// retryable reports whether an HTTP status is worth retrying.
func retryable(status int) bool {
	return status == http.StatusTooManyRequests || status == 529 || status >= 500
}

func backoff(attempt int) time.Duration {
	d := baseBackoff << attempt
	jitter := time.Duration(rand.Int63n(int64(d) / 2))
	return d + jitter
}

func (a *Anthropic) do(ctx context.Context, body apiRequest) (*http.Response, error) {
	payload, err := json.Marshal(body)
	if err != nil {
		return nil, fmt.Errorf("llm: marshal request: %w", err)
	}
	var lastErr error
	for attempt := 0; attempt < maxAttempts; attempt++ {
		if attempt > 0 {
			select {
			case <-ctx.Done():
				return nil, fmt.Errorf("llm: canceled while retrying: %w", ctx.Err())
			case <-time.After(backoff(attempt - 1)):
			}
		}
		req, err := http.NewRequestWithContext(ctx, http.MethodPost, apiURL, bytes.NewReader(payload))
		if err != nil {
			return nil, fmt.Errorf("llm: build request: %w", err)
		}
		req.Header.Set("Content-Type", "application/json")
		req.Header.Set("x-api-key", a.APIKey)
		req.Header.Set("anthropic-version", apiVersion)

		resp, err := a.HTTP.Do(req)
		if err != nil {
			lastErr = fmt.Errorf("llm: request failed (attempt %d/%d): %w", attempt+1, maxAttempts, err)
			slog.Warn("llm: transport error, will retry", "attempt", attempt+1, "error", err)
			continue
		}
		if resp.StatusCode == http.StatusOK {
			return resp, nil
		}
		snippet, _ := io.ReadAll(io.LimitReader(resp.Body, 1024))
		resp.Body.Close()
		lastErr = fmt.Errorf("llm: API status %d: %s", resp.StatusCode, strings.TrimSpace(string(snippet)))
		if !retryable(resp.StatusCode) {
			return nil, lastErr
		}
		slog.Warn("llm: retryable API error", "status", resp.StatusCode, "attempt", attempt+1)
	}
	return nil, fmt.Errorf("llm: exhausted %d attempts: %w", maxAttempts, lastErr)
}

// Complete implements Client.
func (a *Anthropic) Complete(ctx context.Context, system string, messages []Message, maxTokens int) (string, error) {
	resp, err := a.do(ctx, apiRequest{Model: a.ModelID, System: system, Messages: messages, MaxTokens: maxTokens})
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()
	var parsed apiResponse
	if err := json.NewDecoder(io.LimitReader(resp.Body, maxResponseBytes)).Decode(&parsed); err != nil {
		return "", fmt.Errorf("llm: decode response: %w", err)
	}
	if parsed.Error != nil {
		return "", fmt.Errorf("llm: API error %s: %s", parsed.Error.Type, parsed.Error.Message)
	}
	var out strings.Builder
	for _, block := range parsed.Content {
		if block.Type == "text" {
			out.WriteString(block.Text)
		}
	}
	if out.Len() == 0 {
		return "", errors.New("llm: response contained no text")
	}
	return out.String(), nil
}

// Stream implements Client using the Messages streaming API (SSE).
func (a *Anthropic) Stream(ctx context.Context, system string, messages []Message, maxTokens int, onDelta func(string)) (string, error) {
	resp, err := a.do(ctx, apiRequest{Model: a.ModelID, System: system, Messages: messages, MaxTokens: maxTokens, Stream: true})
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	var full strings.Builder
	scanner := bufio.NewScanner(resp.Body)
	scanner.Buffer(make([]byte, 0, 64*1024), 1<<20)
	for scanner.Scan() {
		line := scanner.Text()
		data, ok := strings.CutPrefix(line, "data: ")
		if !ok {
			continue
		}
		var event struct {
			Type  string `json:"type"`
			Delta struct {
				Type string `json:"type"`
				Text string `json:"text"`
			} `json:"delta"`
			Error *struct {
				Type    string `json:"type"`
				Message string `json:"message"`
			} `json:"error"`
		}
		if err := json.Unmarshal([]byte(data), &event); err != nil {
			continue // ignore non-JSON keepalives
		}
		switch event.Type {
		case "content_block_delta":
			if event.Delta.Type == "text_delta" && event.Delta.Text != "" {
				full.WriteString(event.Delta.Text)
				onDelta(event.Delta.Text)
			}
		case "error":
			if event.Error != nil {
				return full.String(), fmt.Errorf("llm: stream error %s: %s", event.Error.Type, event.Error.Message)
			}
		}
	}
	if err := scanner.Err(); err != nil {
		return full.String(), fmt.Errorf("llm: read stream: %w", err)
	}
	if full.Len() == 0 {
		return "", errors.New("llm: stream contained no text")
	}
	return full.String(), nil
}

// CompleteJSON asks for JSON-only output, extracts it (tolerating code
// fences), and unmarshals into v. On a parse failure it retries once with the
// parse error fed back, then gives up.
func CompleteJSON(ctx context.Context, c Client, system string, messages []Message, maxTokens int, v any) error {
	sys := system + "\n\nRespond with ONLY a single valid JSON value. No prose, no markdown fences."
	raw, err := c.Complete(ctx, sys, messages, maxTokens)
	if err != nil {
		return err
	}
	if jerr := unmarshalLoose(raw, v); jerr != nil {
		retry := append(append([]Message{}, messages...),
			Message{Role: "assistant", Content: raw},
			Message{Role: "user", Content: fmt.Sprintf("That was not valid JSON for the required schema (%v). Reply again with ONLY the corrected JSON.", jerr)})
		raw2, err2 := c.Complete(ctx, sys, retry, maxTokens)
		if err2 != nil {
			return fmt.Errorf("llm: JSON retry failed: %w (original parse error: %v)", err2, jerr)
		}
		if jerr2 := unmarshalLoose(raw2, v); jerr2 != nil {
			return fmt.Errorf("llm: model returned invalid JSON twice: %w", jerr2)
		}
	}
	return nil
}

// unmarshalLoose strips markdown fences and any leading/trailing prose around
// the outermost JSON value before unmarshaling.
func unmarshalLoose(raw string, v any) error {
	s := strings.TrimSpace(raw)
	if strings.HasPrefix(s, "```") {
		s = strings.TrimPrefix(s, "```json")
		s = strings.TrimPrefix(s, "```")
		if idx := strings.LastIndex(s, "```"); idx >= 0 {
			s = s[:idx]
		}
		s = strings.TrimSpace(s)
	}
	// Fall back to the outermost {...} or [...] span.
	if !strings.HasPrefix(s, "{") && !strings.HasPrefix(s, "[") {
		start := strings.IndexAny(s, "{[")
		if start < 0 {
			return errors.New("no JSON value found in response")
		}
		s = s[start:]
	}
	end := strings.LastIndexAny(s, "}]")
	if end >= 0 {
		s = s[:end+1]
	}
	return json.Unmarshal([]byte(s), v)
}
