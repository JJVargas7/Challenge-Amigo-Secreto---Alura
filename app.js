let amigos =[];

function agregarAmigo(){
    let amigo = document.querySelector('#amigo');

    //Se evalua si la entrada es vacía, si no se agrega a la lista amigos.
    if(amigo.value != ""){
        amigos.push(amigo.value);
        amigo.value="";
        console.log(amigos);
        actualizarListaEnPantalla();
    }else{
        alert("Por favor, inserte un nombre.");
    }
}

function actualizarListaEnPantalla(){
    let listaHTML = document.querySelector('#listaAmigos');

    //Se limpia la lista HTML y luego se agregan cada uno de los nombres en la lista amigos.
    listaHTML.innerHTML="";
    for (let i = 0; i < amigos.length; i++) {
        let nuevoNombre = document.createElement("li");
        nuevoNombre.textContent = amigos[i];
        listaHTML.append(nuevoNombre);
    }
    
}
