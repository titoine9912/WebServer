#!/bin/bash
set -e

echo "======================================================================"
echo "=========================Google Cloud - Login========================="
echo "======================================================================"
echo "$GOOGLE_CLOUD_KEY" > key.json
gcloud auth activate-service-account --key-file key.json

echo "============================================================================="
echo "=========================Google Cloud - Open Project========================="
echo "============================================================================="
gcloud config set project $PROJECT_NAME
gcloud config set compute/zone us-central1-a

echo "================================================================="
echo "=============Google Cloud - Create cluster if needed============="
echo "================================================================="
if ! gcloud container clusters list | grep -q "$CLUSTER_NAME"; then gcloud container clusters create $CLUSTER_NAME --num-nodes=1; fi

echo "============================================================================="
echo "=========================Google Cloud - Open cluster========================="
echo "============================================================================="
gcloud container clusters get-credentials $CLUSTER_NAME

echo "======================================================================="
echo "==============Kubernetes - Create or update GitLab Secret=============="
echo "======================================================================="
kubectl delete secret gitlab-secret --ignore-not-found
kubectl create secret docker-registry gitlab-secret --docker-server=$CI_REGISTRY --docker-username=$GITLAB_USER_LOGIN --docker-password=$GITLAB_REGISTRY_KEY --docker-email=$GITLAB_USER_EMAIL

echo "====================================================================="
echo "==============Kubernetes - Create or update application=============="
echo "====================================================================="
envsubst < .google-cloud-deployment.yml | kubectl apply -f -
envsubst < .google-cloud-service.yml | kubectl apply -f -