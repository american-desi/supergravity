package llm

import (
	"context"
	"errors"
	"sync"
)

// Fake is a deterministic Client for tests: it returns queued scripted
// responses in order, or Err if set. Safe for concurrent use.
type Fake struct {
	mu        sync.Mutex
	Responses []string
	Err       error
	// Calls records every (system, last user message) pair for assertions.
	Calls []FakeCall
}

// FakeCall captures one invocation for test assertions.
type FakeCall struct {
	System   string
	LastUser string
}

func (f *Fake) next(system string, messages []Message) (string, error) {
	f.mu.Lock()
	defer f.mu.Unlock()
	last := ""
	for i := len(messages) - 1; i >= 0; i-- {
		if messages[i].Role == "user" {
			last = messages[i].Content
			break
		}
	}
	f.Calls = append(f.Calls, FakeCall{System: system, LastUser: last})
	if f.Err != nil {
		return "", f.Err
	}
	if len(f.Responses) == 0 {
		return "", errors.New("llm fake: no scripted responses left")
	}
	resp := f.Responses[0]
	f.Responses = f.Responses[1:]
	return resp, nil
}

func (f *Fake) Complete(_ context.Context, system string, messages []Message, _ int) (string, error) {
	return f.next(system, messages)
}

func (f *Fake) Stream(_ context.Context, system string, messages []Message, _ int, onDelta func(string)) (string, error) {
	resp, err := f.next(system, messages)
	if err != nil {
		return "", err
	}
	onDelta(resp)
	return resp, nil
}

func (f *Fake) Model() string { return "fake-model" }
