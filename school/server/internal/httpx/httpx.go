// Package httpx provides JSON response helpers and middleware: structured
// request logging, panic recovery, Origin enforcement for state-changing
// requests, security headers, and a per-key token-bucket rate limiter.
package httpx

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log/slog"
	"net"
	"net/http"
	"strings"
	"sync"
	"time"

	"github.com/american-desi/supergravity/school/server/internal/ids"
)

// Error is a client-visible failure with an HTTP status. Wrap internal errors
// so handlers can distinguish "user did something wrong" from "we broke".
type Error struct {
	Status  int
	Code    string // stable machine-readable code, e.g. "invalid_input"
	Message string // safe for end users; never includes internals or secrets
}

func (e *Error) Error() string { return fmt.Sprintf("%s: %s", e.Code, e.Message) }

// Fail constructs a client-visible error.
func Fail(status int, code, message string) *Error {
	return &Error{Status: status, Code: code, Message: message}
}

// WriteJSON writes v as a JSON response with the given status.
func WriteJSON(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	if err := json.NewEncoder(w).Encode(v); err != nil {
		// Headers are already out; nothing to do but record it.
		slog.Warn("httpx: encode response failed", "error", err)
	}
}

// WriteError maps err to a JSON error envelope. Unknown errors become opaque
// 500s: internals are logged, never sent to the client.
func WriteError(w http.ResponseWriter, r *http.Request, err error) {
	var he *Error
	if errors.As(err, &he) {
		WriteJSON(w, he.Status, map[string]any{"error": map[string]string{"code": he.Code, "message": he.Message}})
		return
	}
	slog.Error("httpx: internal error", "method", r.Method, "path", r.URL.Path, "error", err)
	WriteJSON(w, http.StatusInternalServerError, map[string]any{
		"error": map[string]string{"code": "internal", "message": "Something went wrong on our side."},
	})
}

// maxBodyBytes bounds every request body we decode; nothing in this API needs
// more than 1 MiB (standards documents are the largest legitimate payload).
const maxBodyBytes = 1 << 20

// DecodeJSON strictly decodes the request body into v, rejecting unknown
// fields, trailing garbage, and oversized bodies.
func DecodeJSON(r *http.Request, v any) error {
	dec := json.NewDecoder(io.LimitReader(r.Body, maxBodyBytes))
	dec.DisallowUnknownFields()
	if err := dec.Decode(v); err != nil {
		return Fail(http.StatusBadRequest, "invalid_json", "Request body is not valid JSON for this endpoint.")
	}
	if dec.More() {
		return Fail(http.StatusBadRequest, "invalid_json", "Request body contains trailing data.")
	}
	return nil
}

// Handler adapts an error-returning handler into http.Handler.
type Handler func(w http.ResponseWriter, r *http.Request) error

func (h Handler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if err := h(w, r); err != nil {
		WriteError(w, r, err)
	}
}

// Recover converts handler panics into 500s instead of killing the process.
func Recover(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		defer func() {
			if p := recover(); p != nil {
				slog.Error("httpx: panic recovered", "method", r.Method, "path", r.URL.Path, "panic", p)
				WriteError(w, r, fmt.Errorf("panic: %v", p))
			}
		}()
		next.ServeHTTP(w, r)
	})
}

type statusRecorder struct {
	http.ResponseWriter
	status int
}

func (s *statusRecorder) WriteHeader(code int) {
	s.status = code
	s.ResponseWriter.WriteHeader(code)
}

// Flush passes through so SSE-style streaming keeps working behind the logger.
func (s *statusRecorder) Flush() {
	if f, ok := s.ResponseWriter.(http.Flusher); ok {
		f.Flush()
	}
}

// Log emits one structured JSON line per request.
func Log(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		rec := &statusRecorder{ResponseWriter: w, status: http.StatusOK}
		reqID := ids.New("req")
		w.Header().Set("X-Request-Id", reqID)
		next.ServeHTTP(rec, r)
		slog.Info("request",
			"id", reqID,
			"method", r.Method,
			"path", r.URL.Path,
			"status", rec.status,
			"duration_ms", time.Since(start).Milliseconds(),
			"ip", ClientIP(r),
		)
	})
}

// SecurityHeaders sets baseline browser protections on every response.
func SecurityHeaders(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		h := w.Header()
		h.Set("X-Content-Type-Options", "nosniff")
		h.Set("X-Frame-Options", "DENY")
		h.Set("Referrer-Policy", "same-origin")
		next.ServeHTTP(w, r)
	})
}

// RequireOrigin rejects state-changing cross-origin requests. Combined with
// SameSite=Strict cookies this is the CSRF defense: browsers always send
// Origin on cross-origin POSTs, and we only accept our own.
func RequireOrigin(publicOrigin string, next http.Handler) http.Handler {
	allowed := strings.TrimSuffix(publicOrigin, "/")
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet, http.MethodHead, http.MethodOptions:
			next.ServeHTTP(w, r)
			return
		}
		origin := r.Header.Get("Origin")
		if origin != "" && origin != allowed {
			WriteError(w, r, Fail(http.StatusForbidden, "bad_origin", "Cross-origin requests are not allowed."))
			return
		}
		next.ServeHTTP(w, r)
	})
}

// ClientIP extracts the caller's IP, honoring the first X-Forwarded-For hop
// (Caddy sits in front and sets it; the API listens on localhost only).
func ClientIP(r *http.Request) string {
	if xff := r.Header.Get("X-Forwarded-For"); xff != "" {
		if first, _, ok := strings.Cut(xff, ","); ok {
			return strings.TrimSpace(first)
		}
		return strings.TrimSpace(xff)
	}
	host, _, err := net.SplitHostPort(r.RemoteAddr)
	if err != nil {
		return r.RemoteAddr
	}
	return host
}

// RateLimiter is a token-bucket limiter keyed by an arbitrary string
// (client IP for anonymous endpoints, user id for authenticated ones).
type RateLimiter struct {
	mu       sync.Mutex
	buckets  map[string]*bucket
	rate     float64 // tokens added per second
	burst    float64
	lastSeen map[string]time.Time
}

type bucket struct {
	tokens float64
	last   time.Time
}

// NewRateLimiter allows `perMinute` requests steady-state with a burst of the
// same size.
func NewRateLimiter(perMinute int) *RateLimiter {
	return &RateLimiter{
		buckets:  make(map[string]*bucket),
		lastSeen: make(map[string]time.Time),
		rate:     float64(perMinute) / 60.0,
		burst:    float64(perMinute),
	}
}

// Allow reports whether key may proceed, consuming a token if so.
func (rl *RateLimiter) Allow(key string) bool {
	rl.mu.Lock()
	defer rl.mu.Unlock()

	now := time.Now()
	b, ok := rl.buckets[key]
	if !ok {
		// Opportunistic cleanup keeps the map bounded without a goroutine.
		if len(rl.buckets) > 10000 {
			for k, seen := range rl.lastSeen {
				if now.Sub(seen) > 10*time.Minute {
					delete(rl.buckets, k)
					delete(rl.lastSeen, k)
				}
			}
		}
		b = &bucket{tokens: rl.burst, last: now}
		rl.buckets[key] = b
	}
	b.tokens = min(rl.burst, b.tokens+now.Sub(b.last).Seconds()*rl.rate)
	b.last = now
	rl.lastSeen[key] = now
	if b.tokens < 1 {
		return false
	}
	b.tokens--
	return true
}

// LimitByIP wraps a handler with an IP-keyed rate limit.
func (rl *RateLimiter) LimitByIP(next Handler) Handler {
	return func(w http.ResponseWriter, r *http.Request) error {
		if !rl.Allow(ClientIP(r)) {
			return Fail(http.StatusTooManyRequests, "rate_limited", "Too many requests; slow down and try again.")
		}
		return next(w, r)
	}
}
