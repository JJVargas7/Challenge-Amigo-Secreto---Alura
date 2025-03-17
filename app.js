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

function sortearAmigo(){

    //Si la lista amigos no está vacía, elegímos aleatoriamente un índice y mostramos en la página el nombre asociado a ese índice.
    if(amigos.length != 0){
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        document.getElementById("resultado").innerHTML = amigos[indiceAleatorio];
    }else{
        alert("Ingrese al menos un nombre.");
    }
}
