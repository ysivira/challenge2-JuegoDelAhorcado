let palabra;
let letra;
let letraErrada = "";
let cantidadErrores = 0;
let cantidadAciertos = 0;
let parrafo ;
let espacio;
let letraCapturada;

function id(str){
    return document.getElementById(str);
}

function palabraAleatoria(palabras){ 
    parrafo = id("palabra");
    parrafo.innerHTML = "";

    palabra = palabras[Math.floor(Math.random()*palabras.length)];
    
    for(let i = 0; i < palabra.length; i++){
        const span = document.createElement("span");
        parrafo.appendChild(span);   
    }
    return palabra;
}

function capturarLetra(){
    letra = document.querySelector("#input-text").value;
    letra = letra.toUpperCase();
    
    document.querySelector("#input-text").focus();
    document.querySelector("#input-text").value = "";
    verificarLetra();
    gamer();
}

function verificarLetra(){
    espacio = document.querySelectorAll("#palabra span");
    let acierto = false;

    for(let i = 0; i < palabra.length; i++){
        if(letra == palabra[i]){
            espacio[i].innerHTML = letra;   
            cantidadAciertos++;
            acierto = true;
        }
    }
    
    if(acierto == false){
        letraErrada = letraErrada + " " + letra;
        document.querySelector(".errado h3").innerHTML = letraErrada; 
        cantidadErrores++; 
        dibujarAhorcado(cantidadErrores);  
        if(cantidadErrores == 7){
            document.querySelector(".evaluar").style.visibility = "hidden";
            document.querySelector("#perdiste").style.visibility = "visible";
            parrafo.innerHTML = palabra;
        }
    }  
}


function dibujarAhorcado(cantidadErrores){
    switch(cantidadErrores){
        case 1:
            dibujarHorca();
            dibujarSoga();
            break;
        case 2:
            dibujarCabeza();
            break;
        case 3:
            dibujarTronco();
            break;
        case 4:
            dibujarPiernaIzquierda();
            break;
        case 5:
            dibujarPiernaDerecha();
            break;
        case 6:
            dibujarBrazoIzquierdo();
            break;
        default:
            document.querySelector(".evaluar").style.visibility = "hidden";
            dibujarBrazoDerecho();
            break;
    }
}

function gamer(){
     if(cantidadAciertos == palabra.length){
        document.querySelector(".evaluar").style.visibility = "hidden";
        document.querySelector("#ganaste").style.visibility = "visible";    
    }
}