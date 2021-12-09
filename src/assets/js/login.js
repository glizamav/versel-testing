"use strict"

let usuario1 = {username: "Juanita",password: "123456"}
let usuario2 = {username: "Pedro",password: "qwerty"}
let usuario3 = {username: "Fulano",password: "55555"}

let usuarios = [usuario1, usuario2, usuario3]


// Para ingresar llama a la funcion de validacion

function redireccionar(){
    location.replace("home.html")
}

function validaUsuario() {
    //Captura del dato
    let valor1 = document.getElementById("usuario").value;
    console.log(valor1);
    let valor2 = document.getElementById("password").value;
    console.log(valor2);
    let existe = false;

    for(let i=0; i < usuarios.length; i++){
        if(valor1 == usuarios[i].username && valor2 == usuarios[i].password){
        
           existe = true;
        }
    }
    
    if(existe){
        console.log("Ingreso el usuario");
        redireccionar();
    }else{
        console.log("No existe o error en credenciales");
        alert("No existe un usuario con esas credenciales");
        
    }
}