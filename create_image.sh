#!/usr/bin/env bash

docker rmi web-app:latest
docker build --tag web-app .
