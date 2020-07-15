# base image
FROM node:10-alpine

# set working directory
#RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY ./src /usr/src/app/src
COPY ./public /usr/src/app/public

EXPOSE 3000
# start app
RUN cd /usr/src/app
CMD ["npm", "start"]