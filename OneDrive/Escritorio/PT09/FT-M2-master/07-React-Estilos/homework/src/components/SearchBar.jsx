import React from 'react';
import s from '../styles/SearchBar.module.css';


export default function SearchBar(props) {
  // acá va tu código
  return (<div className= {s.container}>
    <input type='text' placeholder={'Ciudad...'}/>
    <button onClick={()=>props.onSearch("Buscando Ciudad")} className={s.btn}>Agregar</button>
  </div>)
};