import Config from '../Config';
// action types
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const SEARCH_MOVIE_FAILURE = 'SEARCH_MOVIE_FAILURE';

function searchMovie(searchText) {
  return {
    type: SEARCH_MOVIE,
    searchText
  };
}

function searchMovieSuccess(data, keyword) {
  return {
    type: SEARCH_MOVIE_SUCCESS,
    data,
    keyword
  };
}

function searchMovieFail(error) {
  return {
    type: SEARCH_MOVIE_FAILURE,
    error
  };
}

export function searchMovieList(keyword){
  let url = Config.URL_SEARCH + keyword ;
  return function(dispatch){
    dispatch(searchMovie())
    return fetch(url)
      .then(response => response.json())
      .then(json => json.data)
      .then(data => dispatch(searchMovieSuccess(data,keyword)))
      .catch(error => dispatch(searchMovieFail(error)))
  }
}
