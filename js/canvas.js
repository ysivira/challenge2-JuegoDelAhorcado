var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

function dibujarHorca(){
    pincel.beginPath();
    pincel.strokeStyle = "#532915";
    pincel.lineWidth = 10;
    pincel.moveTo(80,260);
    pincel.lineTo(370,260); // base
    pincel.moveTo(100,260); 
    pincel.lineTo(100,30); // asta
    pincel.moveTo(95,30);
    pincel.lineTo(250,30); // parte superior
    pincel.moveTo(100, 80);
    pincel.lineTo(150,30); // soporte 
    pincel.stroke();
}


function dibujarSoga(){
    pincel.beginPath();
    pincel.strokeStyle = "#795034";
    pincel.lineWidth = 3;
    pincel.moveTo(240,35);
    pincel.lineTo(240, 70);
    pincel.stroke();

    pincel.moveTo(260, 90);
    pincel.arc(240,90,20,0, 2*3.14);
    pincel.stroke();
}


function dibujarCabeza(){
    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.lineWidth = 4;
    pincel.moveTo(260, 90);
    pincel.arc(240,90,20,0, 2*3.14);
    pincel.stroke();
}

function dibujarTronco(){
    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.lineWidth = 4;
    pincel.moveTo(240,110);
    pincel.lineTo(240,180);
    pincel.stroke();
}

function dibujarPiernaIzquierda(){
    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.lineWidth = 4;
    pincel.moveTo(240,179);
    pincel.lineTo(210,210);
    pincel.stroke();
}

function dibujarPiernaDerecha(){
    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.lineWidth = 4;
    pincel.moveTo(240,179);
    pincel.lineTo(270,210);
    pincel.stroke();
}

function dibujarBrazoIzquierdo(){
    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.lineWidth = 4;
    pincel.moveTo(240,129);
    pincel.lineTo(210,160);
    pincel.stroke();
}

function dibujarBrazoDerecho(){
    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.lineWidth = 4;
    pincel.moveTo(240,129);
    pincel.lineTo(270,160);
    pincel.stroke();
}


