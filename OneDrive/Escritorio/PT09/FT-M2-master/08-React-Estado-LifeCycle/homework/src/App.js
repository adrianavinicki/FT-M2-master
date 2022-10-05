import React from 'react';// o import React, {useState} from 'react'; y abajo en constantes no se pone el prototypo
import './App.css';
import Nav from'./components/Nav.jsx';
import Cards from './components/Cards.jsx';


export default function App() {
  const [cities, setCities] = React.useState([]);//ok

  const apikey = '4ae2636d8dfbdc3044bede63951a019b'; //'88bb5ff8717c978580c49f1ba2181a6b'//process.env.REACT_APP_APIKEY;

function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
      .then(response => response.json()) // la api ne devuelve un string que es convertido x json en objeto
      .then((response_json) => {
        if(response_json.main !== undefined){
          const city = {
            min: Math.round(response_json.main.temp_min),
            max: Math.round(response_json.main.temp_max),
            img: response_json.weather[0].icon,
            id: response_json.id,
            wind: response_json.wind.speed,
            temp: response_json.main.temp,
            name: response_json.name,
            weather: response_json.weather[0].main,
            clouds: response_json.clouds.all,
            latitud: response_json.coord.lat,
            longitud: response_json.coord.lon
          };
          const exist = cities.find((c) => c.id === city.id);// x que no quiero que repita
            if(!exist){
            setCities(oldCities => [...oldCities, city]);//esto retorna un array nuevo
          // o se puede hacer a la vieja usanza pero no es bueno x que retorna array viejo
          // oldCities.push(city);
          // return oldCities
        } else {
          alert("Ciudad no encontrada");
        }
      } 
     })
      .catch(e => console.log(e));
  }
  
  function onClose(id){
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  return (
    <div className="App">
      { /* Tu código acá: */ }
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}
