dev:
	docker compose --env-file=.env up
build:
	docker compose --env-file=.env build
down:
	docker compose --env-file=.env down