// Package ids generates collision-resistant opaque identifiers and tokens.
package ids

import (
	"crypto/rand"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
)

// New returns a 26-hex-char random id with a short type prefix, e.g.
// "usr_1a2b...". Prefixes make foreign keys self-describing in logs.
func New(prefix string) string {
	return prefix + "_" + randomHex(13)
}

// NewToken returns a 64-hex-char secret suitable for session tokens and
// invite codes. Store only Hash(token), never the token itself.
func NewToken() string {
	return randomHex(32)
}

// Hash returns the hex sha256 of s, for storing token digests.
func Hash(s string) string {
	sum := sha256.Sum256([]byte(s))
	return hex.EncodeToString(sum[:])
}

func randomHex(nBytes int) string {
	b := make([]byte, nBytes)
	if _, err := rand.Read(b); err != nil {
		// crypto/rand failing means the platform's entropy source is broken;
		// nothing sensible can continue.
		panic(fmt.Sprintf("ids: crypto/rand unavailable: %v", err))
	}
	return hex.EncodeToString(b)
}
