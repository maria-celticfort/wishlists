# Wishlists
wishlists_build_and_run:
	cd wishlists-backend && \
	docker-compose up --build;
wishlists_run:
	cd wishlists-backend && \
	docker-compose up;
wishlists_stop:
	cd wishlists-backend && \
	docker-compose stop && \
	docker rm wishlists-backend && \
	docker rm wishlists-mongodb;

# Demo
demo_build_and_run:
	cd demo-backend && \
	docker-compose up --build;
demo_run:
	cd demo-backend && \
	docker-compose up;
demo_stop:
	cd demo-backend && \
	docker-compose stop && \
	docker rm demo-backend && \
	docker rm demo-mongodb;