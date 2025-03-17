let amigos =[];

function agregarAmigo(){
    let amigo = document.querySelector('#amigo');

    if(amigo != ""){
        amigos.push(amigo.value);
        amigo.value="";
        //Mostrar array en pantalla
        console.log(amigos);
    }else{
        alert("Por favor, inserte un nombre.");
    }
}