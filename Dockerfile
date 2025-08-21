FROM node:20.18.1

COPY . /reja
WORKDIR /reja
CMD npm install && node server.js

# DOCKERFILE => DOCKER IMAGE => direct:CONTAINER
# DOCKERFILE => DOCKER IMAGE  => docker-compose:CONTAINER