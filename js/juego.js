const palabras = ["JAVASCRIPT", "COMPUTADORA", "SERVIDOR", "MONITOR", "RAM", "AUTOMOVIL", "DESAFIO","ELEMENTOS", "WEB", "PAGINA"];

document.querySelector(".evaluar").style.visibility = "hidden";
document.querySelector("#ganaste").style.visibility = "hidden";
document.querySelector("#perdiste").style.visibility = "hidden";

const btn = id("adivinar");
btn.addEventListener("click", iniciar);
   
const btnProbar = id("probarLetra");
btnProbar.addEventListener("click", capturarLetra);
    
function iniciar(eventt){
    cantidadErrores = 0;
    cantidadAciertos = 0;
    palabraAleatoria(palabras);
    document.querySelector(".evaluar").style.visibility = "visible";
}
