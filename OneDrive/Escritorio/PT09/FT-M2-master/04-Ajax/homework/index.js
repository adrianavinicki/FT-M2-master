
const btnAmigos = document.querySelector("#boton");
// hacemos la lista de amigos
const ulAmigos = document.querySelector("#lista");

function showFriends(){
    ulAmigos.innerHTML = ''; //vacio la lista cada vez que hago click para que no se sume
    //coloco  la direccion del server
    fetch(`http://localhost:5000/amigos`)
    //paso la respuesta a codigo js
    .then(res => res.json())
    .then(amigos => {
     for(let i = 0; i < amigos.length; i++) {
      //  let li = document.createElement('li');//creamos un elemento
      let li = `<li>${amigos[i].name} <button onclick="deleteFriend(${amigos[i].id})">X</button></li>`;
      //  li.innerText = amigos[i].name;//le netemos texto
       // ulAmigos.append(li);//agregamos al nodo padre
      ulAmigos.innerHTML = ulAmigos.innerHTML + li;
     }
    });
};

function deleteFriend(idFriend){
    if(typeof idFriend != "number") {
    idFriend = inputDelete.value;
    inputDelete.value = "";}
    //coloco  la direccion del server pero referenciando el id del amigo que buscamos
    fetch(`http://localhost:5000/amigos/${idFriend}`, {
        method : "DELETE"
    })
    //paso la respuesta a codigo js
    .then(res => res.json())
    .then(() => {
     spanDelete.innerText= "Amigo borrado Exitosamente";
     showFriends();
     });
};

btnAmigos.addEventListener('click', showFriends());

const inputAmigo = document.querySelector("#input");
const btnSearch = document.querySelector('#search');
const spanAmigo = document.querySelector('#amigo');

btnSearch.addEventListener('click', function(e) {
    let idAmigo = inputAmigo.value;
    inputAmigo.value = "";
    //coloco  la direccion del server pero referenciando el id del amigo que buscamos
    fetch(`http://localhost:5000/amigos/${idAmigo}`)
    //paso la respuesta a codigo js
    .then(res => res.json())
    .then(amigo => {
     spanAmigo.innerText = amigo.name;
     });
    });

const inputDelete = document.querySelector("#inputDelete");
const btnDelete = document.querySelector('#delete');
const spanDelete = document.querySelector('#success');
    
btnDelete.addEventListener('click', deleteFriend);
