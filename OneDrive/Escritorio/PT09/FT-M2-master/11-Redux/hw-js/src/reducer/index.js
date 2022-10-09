const { INCREMENTO, DECREMENTO } = require('../action-types');

const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

// [...state, newstate] estoy concatenando
//{...state, contador=5} copio state y reemplazo el valor de la propiedad contador

function contador(state = initialState, action) {
  switch(action.type){
   case INCREMENTO :
    //podria haber algun tipo de logica, filter map o lo que querramos, y luego se lo asociamos a una propiedad de nuestro estado
   return {...state, contador: state.contador + 1};

   case DECREMENTO: 
   return {...state, contador: state.contador - 1};

   default:
   return state

  }
}

module.exports = contador;