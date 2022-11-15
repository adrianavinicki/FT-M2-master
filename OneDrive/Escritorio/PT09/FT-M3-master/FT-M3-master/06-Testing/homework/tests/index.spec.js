const session = require('supertest-session');
const app = require('../index.js'); // Importo el archivo de entrada del server de express.
const { sumArray, pluck } = require('../utils')
const agent = session(app);

describe('Test de APIS', () => {
  describe('GET /', () => {
    it('responds with 200', () => agent.get('/').expect(200));
    it('responds with and object with message `hola`', () =>
        agent.get('/').then((res) => {
          expect(res.body.message).toEqual('hola');
        }));
  });

  describe('GET /test', () => {
    it('responds with 200', () => agent.get('/test').expect(200));
    it('responds with and object with message `test`', () =>
      agent.get('/test').then((res) => {
        expect(res.body.message).toEqual('test');
      }));
  });

  describe('POST /sum', () => {
    it('responds with 200', () => agent.post('/sum').expect(200));
    it('responds with the sum of 2 and 3', () =>
      agent.post('/sum')
        .send({a: 2, b: 3})
        .then((res) => {
          expect(res.body.result).toEqual(5);
        })
    );
    it('responds with the sum of 2 and 5', () =>
      agent.post('/sum')
        .send({a: 2, b: 5})
        .then((res) => {
          expect(res.body.result).toEqual(7);
        })
    );
  });

  describe('POST /product', () => {
    it('responds with 200', () => agent.post('/product').expect(200));
    it('responds with the product of 2 and 3', () =>
      agent.post('/product')
        .send({a: 2, b: 3})
        .then((res) => {
          expect(res.body.result).toEqual(6);
        })
    );
    it('responds with the product of 2 and 4', () =>
      agent.post('/product')
        .send({a: 2, b: 4})
        .then((res) => {
          expect(res.body.result).toEqual(8);
        })
    );
  });

  describe('POST /sumArray', () => {
    it('responds with 200', () => agent.post('/sumArray').expect(200).send({array: [2,5,7,10,11,15,20], num: 13}));
    it('responds with true if two numbers into the array result in num', () =>
      agent.post('/sumArray')
        .send({array: [2,5,7,10,11,15,20], num: 13})
        .then((res) => {
          expect(res.body.result).toEqual(true);
      }));
  });

  describe('function sumArray',()=>{
    const array = [1,2,3,4]
    it('deberia retornar true si dos numeros suman el numero', ()=>
    {
      expect(sumArray(array, 7)).toEqual(true)
    })
    it('deberia retornar false si dos numeros no suman el numero', ()=>
    {
      expect(sumArray(array, 99)).toEqual(false)
    })
    it('deberia retornar false si el primer argumento no es un array', ()=>
    {
      expect(() => sumArray(4, 7)).toThrow(TypeError)
    })
    it('deberia retornar false si busco el 2', ()=>
    {
      expect(sumArray(array, 2)).toEqual(false)
    })
    it('deberia retornar false si busco el 8', ()=>
    {
      expect(sumArray(array, 8)).toEqual(false)
    })
  })
describe('POST /numString', () => {
    it('responds with 400 si no le mando body', () => agent.post('/numString').expect(400));
    it('si le mando hola me devuelve 4', () =>
      agent.post('/numString')
        .send({word: 'hola'})
        .then((res) => {
          expect(res.body.result).toEqual(4);
        })
    );
});
describe('function pluck',()=>{
    const array = [{nombre: 'fede', apellido: 'panella', ciudad: 'la plata'},
    {nombre: 'jorge', apellido: 'pirulo', ciudad: 'ba'}]
    it('retorna array con solo nombres', ()=>
    {
      expect(pluck(array, 'nombre')).toEqual(['fede', 'jorge'])
    })
  })

  describe('POST /pluck', () => {
    const array = [{nombre: 'fede', apellido: 'panella', ciudad: 'la plata'},
    {nombre: 'jorge', apellido: 'pirulo', ciudad: 'ba'}]
    it('responds with 400 si no le mando body', () => agent.post('/pluck').expect(400));
    it('si le mando un array y nombres que me devuelva el array', () =>
      agent.post('/pluck')
        .send({array: array, prop:'nombre'})
        .then((res) => {
          expect(res.body.result).toEqual(['fede', 'jorge']);
        })
    );
});


});

