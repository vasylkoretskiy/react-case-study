FROM node:10-alpine

WORKDIR /usr/app
COPY package*.json ./
RUN npm install --silent

COPY . .
CMD [ "npm", "dev" ]