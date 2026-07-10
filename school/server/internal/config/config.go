// Package config loads and validates all runtime configuration from the
// environment. Nothing else in the codebase reads os.Getenv.
package config

import (
	"fmt"
	"os"
	"strconv"
	"time"
)

// Config is the validated runtime configuration.
type Config struct {
	// Addr is the listen address for the API server, e.g. "127.0.0.1:8080".
	Addr string
	// DBPath is the SQLite database file path.
	DBPath string
	// PublicOrigin is the browser-facing origin (scheme://host[:port]) used
	// for Origin checks on state-changing requests and cookie security.
	PublicOrigin string
	// AnthropicAPIKey authenticates LLM calls. Required unless LLMDisabled.
	AnthropicAPIKey string
	// LLMModel is the model id used for compilation and tutoring.
	LLMModel string
	// TeacherEmail / TeacherPassword bootstrap the single teacher account on
	// first boot. Ignored once a teacher exists.
	TeacherEmail    string
	TeacherPassword string
	// EnrollmentCap is the maximum number of active students (v1 scope: 20).
	EnrollmentCap int
	// TutorDailyMessageCap bounds per-student tutor spend per day.
	TutorDailyMessageCap int
	// SessionTTL is how long a login session lives.
	SessionTTL time.Duration
	// LLMTimeout bounds every single LLM API call.
	LLMTimeout time.Duration
	// SeedPath, if set, points at a standards+misconceptions seed JSON that is
	// imported on boot when the standards table is empty.
	SeedPath string
	// Dev relaxes cookie Secure flag for plain-HTTP local development.
	Dev bool
}

const (
	defaultAddr                 = "127.0.0.1:8080"
	defaultDBPath               = "school.db"
	defaultLLMModel             = "claude-sonnet-5"
	defaultEnrollmentCap        = 20
	defaultTutorDailyMessageCap = 150
	defaultSessionTTL           = 30 * 24 * time.Hour
	defaultLLMTimeout           = 4 * time.Minute
)

// Load reads configuration from the environment and validates it. It returns
// an error describing every missing or malformed variable it finds.
func Load() (Config, error) {
	cfg := Config{
		Addr:            envOr("SCHOOL_ADDR", defaultAddr),
		DBPath:          envOr("SCHOOL_DB_PATH", defaultDBPath),
		PublicOrigin:    os.Getenv("SCHOOL_PUBLIC_ORIGIN"),
		AnthropicAPIKey: os.Getenv("ANTHROPIC_API_KEY"),
		LLMModel:        envOr("SCHOOL_LLM_MODEL", defaultLLMModel),
		TeacherEmail:    os.Getenv("SCHOOL_TEACHER_EMAIL"),
		TeacherPassword: os.Getenv("SCHOOL_TEACHER_PASSWORD"),
		SeedPath:        os.Getenv("SCHOOL_SEED_PATH"),
		Dev:             os.Getenv("SCHOOL_DEV") == "1",
		SessionTTL:      defaultSessionTTL,
		LLMTimeout:      defaultLLMTimeout,
	}

	var problems []string
	if cfg.PublicOrigin == "" {
		problems = append(problems, "SCHOOL_PUBLIC_ORIGIN is required (e.g. https://school.example.com)")
	}
	if cfg.AnthropicAPIKey == "" {
		problems = append(problems, "ANTHROPIC_API_KEY is required")
	}

	var err error
	if cfg.EnrollmentCap, err = envInt("SCHOOL_ENROLLMENT_CAP", defaultEnrollmentCap); err != nil {
		problems = append(problems, err.Error())
	}
	if cfg.TutorDailyMessageCap, err = envInt("SCHOOL_TUTOR_DAILY_CAP", defaultTutorDailyMessageCap); err != nil {
		problems = append(problems, err.Error())
	}

	if len(problems) > 0 {
		return Config{}, fmt.Errorf("invalid configuration: %v", problems)
	}
	return cfg, nil
}

func envOr(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}

func envInt(key string, fallback int) (int, error) {
	v := os.Getenv(key)
	if v == "" {
		return fallback, nil
	}
	n, err := strconv.Atoi(v)
	if err != nil || n <= 0 {
		return 0, fmt.Errorf("%s must be a positive integer, got %q", key, v)
	}
	return n, nil
}
