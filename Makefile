build_and_run:
	docker build . -t wishlist_backend
	docker run --name wishlist_backend -p 8080:8080 -d wishlist_backend
run:
	docker run --name wishlist_backend -p 8080:8080 -d wishlist_backend
stop:
	docker stop wishlist_backend
	docker rm wishlist_backend