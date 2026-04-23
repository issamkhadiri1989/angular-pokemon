start: stop
	docker compose up -d 

stop:
	docker stop $$(docker ps -aq)

enter:
	docker compose exec angular sh
