//import { Switch } from 'react-router-dom';
//import { getMovies, addMovieFavorite, removeMovieFavorite, getMoviesDetail} from '../actions/index.js';


const initialState = {
  moviesFavorites: [],
  moviesLoaded: [],
  movieDetail: {}
};


function rootReducer(state = initialState, action) {
  switch(action.type){
    case "ADD_MOVIE_FAVORITE":
      console.log(action.payload);
      console.log(typeof state.moviesFavorites);
       return {
        ...state,
        moviesFavorites:/*state.moviesFavorites.concat(action.payload)*/
        //tambien valido con spread operator
        [...state.moviesFavorites, action.payload] //NUNCA PUSH X QUE MODIFICA EL ARREGLO ANTERIOR
      };
    case "GET_MOVIES": 
      return {
        ...state,
        moviesLoaded: action.payload.Search //porque cuando vamos a la api si miramos todos los objetos de las peliculas se encuentran dentro de Search
      };
    case "REMOVE_MOVIE_FAVORITE": 
      return {
        ...state,
        moviesFavorites: state.moviesFavorites.filter(m => m.id !== action.payload)
      };
    case "GET_MOVIE_DETAILS": 
      return {
        ...state,
        movieDetail: action.payload
      };
    default:
     return state
}
}

export default rootReducer;