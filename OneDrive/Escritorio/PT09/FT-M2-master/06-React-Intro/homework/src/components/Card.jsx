import React from 'react';
//Card Component
export default function Card(props) {
  // props = {max, min, name, onClose, img} viene de App.js
  // acá va tu código
  return (
   <div>
    <button onClick={props.onClose}>X</button>
    <h4>{props.name}</h4>
    <div>
      <p>Min</p>
      <p>{props.min}</p>
      <p>Max</p>
      <p>{props.max}</p>
    </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={'img'}></img>
   </div>
   )
};