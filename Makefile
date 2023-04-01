build_and_run:
	docker-compose up --build
run:
	docker-compose up
stop:
	docker-compose stop
	docker rm wishlist-backend
	docker rm mongodb