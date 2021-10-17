#!/usr/bin/env bash

cd simple-api

docker-compose stop
docker-compose rm -f
docker-compose pull
docker-compose up -d

cd - > /dev/null