# Supergravity School — developer entrypoints.

.PHONY: test build dev-api dev-web deploy

test:
	cd server && go vet ./... && go test ./...

build:
	cd server && CGO_ENABLED=0 go build -trimpath -o bin/school-api ./cmd/api
	cd web && npm run build

# Local dev: API on :8080 with relaxed cookies; frontend on :5173 proxies /api.
dev-api:
	cd server && \
	SCHOOL_DEV=1 \
	SCHOOL_PUBLIC_ORIGIN=http://localhost:5173 \
	SCHOOL_DB_PATH=dev.db \
	SCHOOL_TEACHER_EMAIL=$${SCHOOL_TEACHER_EMAIL:-teacher@example.com} \
	SCHOOL_TEACHER_PASSWORD=$${SCHOOL_TEACHER_PASSWORD:-change-me-now-1} \
	go run ./cmd/api

dev-web:
	cd web && npm run dev

deploy:
	./deploy/deploy.sh $(HOST) $(DOMAIN)
