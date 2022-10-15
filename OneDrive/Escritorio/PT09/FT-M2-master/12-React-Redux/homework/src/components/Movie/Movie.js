import React from 'react';
import { connect } from 'react-redux';
import { getMoviesDetail } from '../../actions/index.js';
import './Movie.css';

class Movie extends React.Component {
    //este componente es para renderizar ni bien se haga click en el componente...
    constructor(props) {
    super(props); // ? extends Component va por esto
    this.movie = {
      Title: "",
      Year: "",
      Rated: "",
      Genre: "",
      Plot: "",
      Poster: ""
    };
  }
 componentDidMount() {
    const movieID = this.props.match.params.id;
    this.props.getMoviesDetail(movieID); // aca se despacha la accion y se llena el estado de movie detail
 }


    render() {
         return (
            <div className="movie-detail">
                Detalle de la Pelicula
                <h1>{this.props.movie.Title}</h1>
                <h2>{this.props.movie.Year}</h2>
                <h2>{this.props.movie.Rated}</h2>
                <h2>{this.props.movie.Genre}</h2>
                <h2>{this.props.movie.Plot}</h2>
                <img src={this.props.movie.Poster} alt=""/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
     movie: state.movieDetail,
    };
}

function mapDispatchToProps(dispatch) {
    return {
     getMoviesDetail:(movieID) => dispatch(getMoviesDetail(movieID))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);