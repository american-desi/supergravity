package api

import (
	"net/http"

	"github.com/american-desi/supergravity/school/server/internal/auth"
	"github.com/american-desi/supergravity/school/server/internal/httpx"
)

type userView struct {
	ID          string `json:"id"`
	Role        string `json:"role"`
	DisplayName string `json:"display_name"`
	Email       string `json:"email,omitempty"`
}

func viewOf(u *auth.User) userView {
	return userView{ID: u.ID, Role: u.Role, DisplayName: u.DisplayName, Email: u.Email}
}

func (s *Server) handleLogin(w http.ResponseWriter, r *http.Request) error {
	var in struct {
		Identifier string `json:"identifier"`
		Password   string `json:"password"`
	}
	if err := httpx.DecodeJSON(r, &in); err != nil {
		return err
	}
	token, user, err := s.Auth.Login(r.Context(), in.Identifier, in.Password)
	if err != nil {
		return err
	}
	s.Auth.SetSessionCookie(w, token)
	httpx.WriteJSON(w, http.StatusOK, map[string]any{"user": viewOf(user)})
	return nil
}

func (s *Server) handleRegister(w http.ResponseWriter, r *http.Request) error {
	var in struct {
		InviteCode  string `json:"invite_code"`
		DisplayName string `json:"display_name"`
		Password    string `json:"password"`
	}
	if err := httpx.DecodeJSON(r, &in); err != nil {
		return err
	}
	user, token, err := s.Auth.RedeemInvite(r.Context(), in.InviteCode, in.DisplayName, in.Password, s.Cfg.EnrollmentCap)
	if err != nil {
		return err
	}
	s.Auth.SetSessionCookie(w, token)
	httpx.WriteJSON(w, http.StatusCreated, map[string]any{"user": viewOf(user)})
	return nil
}

func (s *Server) handleLogout(w http.ResponseWriter, r *http.Request) error {
	if cookie, err := r.Cookie(auth.SessionCookie); err == nil {
		if err := s.Auth.Logout(r.Context(), cookie.Value); err != nil {
			return err
		}
	}
	s.Auth.ClearSessionCookie(w)
	httpx.WriteJSON(w, http.StatusOK, map[string]string{"status": "signed_out"})
	return nil
}

func (s *Server) handleMe(w http.ResponseWriter, r *http.Request) error {
	httpx.WriteJSON(w, http.StatusOK, map[string]any{"user": viewOf(auth.FromContext(r.Context()))})
	return nil
}
