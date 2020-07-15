import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {SEARCH_MOVIE, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_FAILURE, ENTER_SEARCH_TEXT} from '../actions'

const defaultStateList = {
  isFetching: false,
  items:[],
  error:{}
};

const movieList = (state = defaultStateList, action) => {
  switch (action.type){
    case SEARCH_MOVIE:
      return {...state, isFetching:true};
    case SEARCH_MOVIE_SUCCESS:
      return {...state, isFetching:false, items:action.data};
    case SEARCH_MOVIE_FAILURE:
      return {...state, isFetching:false, error:action.data};
    default:
      return state;
  }
};

const input = (state = '', action) => {
  switch (action.type){
    case ENTER_SEARCH_TEXT:
      return Object.assign({}, state, {
        isFetching:true
      });
    default:
      return state;
  }
};

const movieApp = combineReducers({
  movieList,
  input,
  routing: routerReducer
});

export default movieApp;
