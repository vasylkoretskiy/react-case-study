## Vasyl case study 

## REST API
A REST API that runs on node.js and uses:
* Express
* Redis
Backend stores responses from OMDB in Redis cache, using page+keyword as hash key, it allows to not request each single page

## Features
* List popular movies, using OMDB API
* Search movies by title
* View detail movie info including poster, title

## Technical Notes
* State management using [React-Redux](https://github.com/reactjs/react-redux)
* Environment set-up using [Create-React-App](https://github.com/facebookincubator/create-react-app)

## RUN APPLICATION VIA DOCKER
* 1) docker-compose up --build
* 2) open virtual machine's IP address:3000
* for instanse http://192.168.99.100:3000/
* 3) API is listening http://192.168.99.100:4000/api/search?keyword=keywoard

* 4) to stop docker 
* docker-compose down