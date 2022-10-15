


export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload }
}

export function removeMovieFavorite(payload) {
  return { type: "REMOVE_MOVIE_FAVORITE", payload }
}


export function getMovies(titulo) {
  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=8b3bdbb6&s=${titulo}`)
           .then(response => response.json())
           .then(json => {
            dispatch({ type: "GET_MOVIES", payload: json });
          });
  };
}

export function getMoviesDetail(idMovie) {
  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=8b3bdbb6&i=${idMovie}`)
           .then(response => response.json())
           .then(data => {
            dispatch({ type: "GET_MOVIE_DETAILS", payload: data});
          });
  };
}