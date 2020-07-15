const axios = require('axios');
const { API_KEY_OMDB } = require('../src/app/config');

async function getMoviesAsync(keyword, page) {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=tt3896198&s=${keyword}&apikey=${API_KEY_OMDB}&page=${page}`,
    );
    const movies = await response.data;
    return movies;
  } catch (err) {
    console.log(err.message);
    // TODO: handle and forward(if needed) message to the client
    return null;
  }
}

module.exports = {
  getMoviesAsync,
};
