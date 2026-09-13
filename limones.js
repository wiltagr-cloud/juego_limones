let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ANCHO_LIMON=20;
const ALTURA_LIMON=20;
let peronajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);
let limonX=canvas.width/2;
let limonY=0;

function iniciar(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();

}
function dibujarSuelo() {
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);

}

function dibujarPersonaje(){
    ctx.fillStyle="yellow";
    ctx.fillRect(peronajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE)
}

function moverIzquierda(){
    peronajeX=peronajeX-10;
    actualizarPantalla();
    detectarColision();
}

//moverDerecha
function moverDerecha(){
    peronajeX=peronajeX+10;
    actualizarPantalla();
    detectarColision();
}

function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();

}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

}

function dibujarLimon(){
    ctx.fillStyle="green";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON)
}

function bajarLimon(){
    limonY = limonY + 10;
    actualizarPantalla();
    detectarColision();
}

function detectarColision(){

    if(limonX+ANCHO_LIMON > peronajeX &&
       limonX < peronajeX+ANCHO_PERSONAJE &&
       limonY+ALTURA_LIMON > personajeY &&
       limonY < personajeY+ALTURA_PERSONAJE){

        alert("ATRAPADO!!");
    }
}