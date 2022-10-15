import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies, addMovieFavorite } from "../../actions";


export class Buscador extends Component {
  //this.props
  constructor(props) {
    super(props); // ? extends Component va por esto
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("este es  : ", this.state.title);
    this.props.getMovies(this.state.title);
   
  }

 

  render() {
    const {title} = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title} // lo mismo que decir {this.state.title} pero arriba lo definiio como constante linea 25
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {this.props.movies && this.props.movies !== undefined && this.props.movies !== null && this.props.movies.length > 0? (this.props.movies?.map((m) =>
          <li key={m.imdbID}>
            <Link to={`/movie/${m.imdbID}`}>
              {m.Title}
            </Link>
            <button onClick={() => this.props.addMovieFavorite({title: m.Title, id: m.imdbID})}>FAV</button>
          </li>
         )) : (null)
         }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title)),
  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

//export default Buscador;

// como funcion

/*
export default function Buscador({props1, props2}){
 const [title, setTitle] = useState("");

 let handleChange = (e) => {setTitle(e.target.value);}

 let handleSubmit = (e) =>{
  e.preventDefault();
 }

 return ({ const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {Aqui tienes que escribir tu codigo para mostrar la lista de peliculas
        }
        </ul>
      </div>

 })

}

*/ 
