import React from 'react';
import './Timer.css';



const Timer = () => {

  const [segundos, setSegundos] = React.useState(0);
  const [activo, setActivo] = React.useState(false);
  const [tipo, setTipo] = React.useState('Contador');
  const myRef= React.useRef(null);

  React.useEffect(() => {
    let intervalo = null;
    if(activo && tipo === 'Contador'){
      intervalo = setInterval(() => {
      setSegundos(prevState => prevState + 1);}, 1000);
    }
    if(activo && tipo === 'Cuenta Regresiva'){
      intervalo = setInterval(() => {
      setSegundos(prevState => prevState - 1);}, 1000);
    }
    if(!activo && segundos !== 0 && tipo === "Contador"){
      clearInterval(intervalo);
    }
    if(segundos === 0 && tipo === "Cuenta Regresiva"){
      reset();
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);

      }, [activo, segundos, tipo]);

function toogle(){
  setActivo(!activo);
}

function reset(){
  setSegundos(0);
  setActivo(false);
}

function cambioTipo(){
  tipo === 'Contador' ? setTipo('Cuenta Regresiva') : setTipo('Contador');
}

function agregaSegundos(){
  let value = myRef.current.value;
  setSegundos(value); // viene a reemplazar el e.target.value
}


  return (
    <div className="app">
      <div className="time">
        {segundos} s
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`} onClick={toogle}>
          {activo ? 'Pausa' : 'Inicio'}
        </button>
        <button className="button-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>
         {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' &&
      <input  onChange={agregaSegundos} type="number"  ref={myRef} placeholder="Ingresa Segundos" autoComplete="off"/>}
    </div>
  );
};

export default Timer;
