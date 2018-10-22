FROM node:alpine

#Installation
ADD backend/package.json backend/package.json
RUN apk add --no-cache make gcc g++ python && \
    cd backend && \
    yarn install && \
    apk del make gcc g++ python
ADD frontend/build frontend/
ADD backend/build backend/

#Volumes
RUN mkdir /.app
VOLUME /.app

#Configuration
ENV NODE_ENV production
EXPOSE 8080

#Run
ENTRYPOINT ["node","backend/index.js"]