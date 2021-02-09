import { combineReducers } from "redux";
import { REMOVE_MOVIE, RESPONSE, PUSH_MOVIE, SWITCH_LOADER, LOGIN_USER, LOGOUT_USER, UPDATE_USER_DATABASE } from "./actions";

const user_movie_database = (state = [], action) => {
  switch (action.type) {
    case REMOVE_MOVIE: return state
      .filter(movie => movie.imdbID !== action.movie.imdbID)
    case PUSH_MOVIE: return state.some(item => item.imdbID === action.movie.imdbID) 
        ? state.map(item => item.imdbID === action.movie.imdbID 
            ? action.movie 
            : item ) 
        : ([ ...state, action.movie ])
    default: return state;
  }
}

const recentSearchResponse = (state = "no-result", action) => action.type === RESPONSE ? ([...action.response]) : state;

const top_movies = (state = [], action) => state;

const user_login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER: return { 
      username: action.response.username,
      token: action.response.token,
      movies: action.response.movies,
    }
    case LOGOUT_USER: return {}
    case UPDATE_USER_DATABASE: return { ...state, movies: action.database }
    default: return state;
  }
};

const loader = (state = false, action) => action.type === SWITCH_LOADER ? !state : state;

export default combineReducers({
  user_movie_database, 
  recentSearchResponse, 
  top_movies,
  user_login,
  loader
})