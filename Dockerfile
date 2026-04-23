FROM node:20-alpine

WORKDIR /app

RUN npm install -g @angular/cli

EXPOSE 4200

