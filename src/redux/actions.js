import store from "./store";
import Cookies from "js-cookie";

const REMOVE_MOVIE = "REMOVE_MOVIE";
const PUSH_MOVIE = "PUSH_MOVIE";
const RESPONSE = "RESPONSE";
const SWITCH_LOADER = "SWITCH_LOADER";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const UPDATE_USER_DATABASE = "UPDATE_USER_DATABASE";

const removeMovieWithoutLogin = (movie) => ({
  type: REMOVE_MOVIE,
  movie,
});

const pushMovieWithoutLogin = (movie) => ({
  type: PUSH_MOVIE,
  movie,
});

const returnResponse = (response) => ({
  type: RESPONSE,
  response,
});

const loginUser = (response) => ({
  type: LOGIN_USER,
  response,
});

const logoutUser = () => ({
  type: LOGOUT_USER,
});

const switchLoader = () => ({
  type: SWITCH_LOADER,
});

const updateUserLoginDatabase = (database) => ({
  type: UPDATE_USER_DATABASE,
  database,
});

function searchForMovie(input, database) {
  return async function (dispatch) {
    switch (database) {
      case "API": {
        try {
          dispatch(switchLoader());
          const response = await fetch(
            `https://www.omdbapi.com/?s=${input}&apikey=2c51327`
          );
          const jason = await response.json();
          const search_response = jason.Search.map(
            (movie) =>
              (movie = {
                imdbID: movie.imdbID,
                year: movie.Year,
                poster: movie.Poster,
                title: movie.Title,
                type: movie.Type,
              })
          );
          setTimeout(function () {
            Array.isArray(jason.Search)
              ? dispatch(returnResponse(search_response))
              : dispatch(returnResponse([]));
            dispatch(switchLoader());
          }, 1000);
        } catch (error) {
          dispatch(returnResponse([]));
          console.error(error);
        }
        break;
      }
      case "USER": {
        // check if user is logged in or out
        break;
      }
      default:
        return null;
    }
  };
}

function pushMovie(movie) {
  return async function (dispatch) {
    const user_login = store.getState().user_login
    if (!user_login.username) {
      dispatch(pushMovieWithoutLogin(movie));
    } else {
      const response = await addOrRemoveMovieFromUserDatabase("addMovie", movie, user_login.token)
      dispatch(updateUserLoginDatabase(response))
    }
  };
}

function removeMovie(movie) {
  return async function (dispatch) {
    const user_login = store.getState().user_login
    if (!user_login.username) {
      dispatch(removeMovieWithoutLogin(movie));
    } else {
      const response = await addOrRemoveMovieFromUserDatabase("removeMovie", movie, user_login.token)
      dispatch(updateUserLoginDatabase(response))
    }
  };
}

async function addOrRemoveMovieFromUserDatabase(param, movie, token) {
  const api_shot = await fetch(`https://movies.cerassus.usermd.net/user/${param}`, {
    headers: {
      "Content-Type": "application/json",
      "auth-token": token,
    },
    method: "POST",
    body: JSON.stringify({
      movie: {
        imdbID: movie.imdbID,
        rating: movie.rating,
        shelf: movie.shelf,
      },
    }),
  }
  );
  const response = await api_shot.json();
  return response
}

function loginToken() {
  return async function (dispatch) {
    const token = "" || Cookies.get("token");
    if(!token) return {}
    const api_shot = await fetch(`https://movies.cerassus.usermd.net/user/loginToken`, {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      method: "POST",
    });
    const response = await api_shot.json();
    dispatch(loginUser(response));
  };
}


export {
  removeMovie,
  REMOVE_MOVIE,
  PUSH_MOVIE,
  pushMovie,
  returnResponse,
  RESPONSE,
  searchForMovie,
  switchLoader,
  SWITCH_LOADER,
  loginUser,
  logoutUser,
  LOGIN_USER,
  LOGOUT_USER,
  updateUserLoginDatabase,
  UPDATE_USER_DATABASE,
  loginToken
};
