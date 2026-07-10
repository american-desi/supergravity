#!/usr/bin/env bash
# One-command deploy to a single VPS over SSH.
# Usage: ./deploy.sh user@your-vps school.example.com
set -euo pipefail

HOST="${1:?usage: deploy.sh user@host domain}"
DOMAIN="${2:?usage: deploy.sh user@host domain}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "==> Building API (linux/amd64, CGO-free)"
(cd "$ROOT/server" && CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -o /tmp/school-api ./cmd/api)

echo "==> Building web"
(cd "$ROOT/web" && npm ci && npm run build)

echo "==> Shipping artifacts"
ssh "$HOST" 'sudo mkdir -p /srv/school/bin /srv/school/web /srv/school/data && sudo chown -R $(whoami) /srv/school'
scp /tmp/school-api "$HOST:/srv/school/bin/school-api.new"
rsync -az --delete "$ROOT/web/dist/" "$HOST:/srv/school/web/"
sed "s/school.example.com/$DOMAIN/" "$ROOT/deploy/Caddyfile" | ssh "$HOST" 'sudo tee /etc/caddy/Caddyfile > /dev/null'
scp "$ROOT/deploy/school-api.service" "$HOST:/tmp/school-api.service"

echo "==> Activating"
ssh "$HOST" '
  set -e
  test -f /srv/school/school.env || { echo "ERROR: create /srv/school/school.env first (see school/.env.example)"; exit 1; }
  sudo mv /tmp/school-api.service /etc/systemd/system/school-api.service
  mv /srv/school/bin/school-api.new /srv/school/bin/school-api
  chmod +x /srv/school/bin/school-api
  sudo systemctl daemon-reload
  sudo systemctl enable --now school-api
  sudo systemctl restart school-api
  sudo systemctl reload caddy
  sleep 1
  curl -fsS http://127.0.0.1:8080/api/health && echo " — api healthy"
'
echo "==> Done: https://$DOMAIN"
