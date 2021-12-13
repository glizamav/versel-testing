
// declaracion de variables
var usernameInput, emailInput, passwordInput;

// se asignan las variables una vez que la pagina carge
window.onload = function() {

    // se asignan las variables a los inputs
    usernameInput = document.getElementById("username");
    emailInput = document.getElementById("email");
    passwordInput = document.getElementById("pass");

    // se recogen los eventos
    usernameInput.addEventListener('input', createListener(isValidUsername));    
    emailInput.addEventListener('input', createListener(isValidEmail));
    passwordInput.addEventListener('input', createListener(isValidPassword));

}

//funciones de validacion

//solo de la a la z en minusculas
function isValidUsername() {
    return /^[a-z]+$/.test(username);
}

//debe contener una mayuscula, monusculas y un numero
function isValidPassword(){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(password);
}

//tiene que ser una direccion de email valida
function isValidEmail(){
    return /^[^@]+@[^@.]+\.[a-z]+$/.test(email);
}

function validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
     alert("La dirección de email " + valor + " es correcta.");
    } else {
     alert("La dirección de email es incorrecta.");
    }
  }

//creamos el listener
function createListener(validator){
    return e => {
        const input = e.target;
        const text = e.target.value;
        const valid = validator(text);
        const showTip = text !== "" && !valid;
        const tooltip = e.target.nextElementSibling;
        showOrHireTip(showTip, tooltip, input)
    };
}

// funcion donde mostramos o ocultamos la alerta 
// y cambia el estilo del css

function showOrHireTip(show, element, message = "first", input){
    if(message == "first"){
        if (show) {
            element.style.display = "inherit";
            input.style.borderBottom = "2px solid #dea54b";
        }else{
            input.style.borderBottom = "2px solid #00bfb2";
            element.style.display = "none"
        }
    }
    else if(message == "second"){
        if (show) {
            input.style.borderBottom = "2px solid red";
            element.style.visibility = "visible";

        }else{
            input.style.borderBottom = "2px solid #00bfb2";
            element.style.visibility = "hidden";
        }
    }


}

