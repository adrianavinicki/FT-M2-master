function sumArray(array, n){
    if(!Array.isArray(array)){ throw new TypeError('array')}
    if(typeof n !== 'number'){ throw new TypeError('n')}
    for(let i = 0; i < array.length-1; i++){
        for(let j= i+1; j < array.length; j++){
           if(array[i] + array[j] === n){
            return true
           }
        }
    }return false
}

// [{color: rojo, ruedas: 4}{color: verde, ruedas: 4}] quiero arreglo de propiedad color

function pluck(array, prop){
    return array.map(o => o[prop])
}

module.exports = {
    sumArray,
    pluck
}