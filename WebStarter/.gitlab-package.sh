#!/bin/bash
set -e

echo "=============================================================="
echo "=========================Docker Build========================="
echo "=============================================================="
docker build --build-arg JAR_FILE=$JAR_FILE -t $CI_REGISTRY_IMAGE .

echo "============================================================="
echo "=========================Docker Push========================="
echo "============================================================="
docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
docker push $CI_REGISTRY_IMAGE
docker logout $CI_REGISTRY
