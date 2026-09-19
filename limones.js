let canvas=document.getElementById("areaJuego"); 
let ctx=canvas.getContext("2d"); 

// IMÁGENES AGREGADAS
let imagenPersona = new Image();
imagenPersona.src = "persona.jpg";

let imagenLimon = new Image();
imagenLimon.src = "limon.jpg";
 
 
const ALTURA_SUELO=20; 
const ALTURA_PERSONAJE=60; 
const ANCHO_PERSONAJE=40; 
const ANCHO_LIMON=20; 
const ALTURA_LIMON=20; 
 
let peronajeX=canvas.width/2; 
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE); 
let limonX=canvas.width/2; 
let limonY=0; 
let puntaje=0; 
let vidas=3; 
let velocidadCaida=200; 
let intervalo; 
 
function iniciar(){ 
    intervalo=setInterval(bajarLimon,velocidadCaida);//PrimerParametro: funcion segundoParamentro: tiempo en milisegundos 
    dibujarSuelo(); 
    dibujarPersonaje(); 
    aparecerLimon(); 
 
} 

function dibujarSuelo() { 
    ctx.fillStyle="blue"; 
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO); 
 
} 
 
function dibujarPersonaje(){ 

    // IMAGEN DEL PERSONAJE
    ctx.drawImage(
        imagenPersona,
        peronajeX,
        personajeY,
        ANCHO_PERSONAJE,
        ALTURA_PERSONAJE
    );

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

    // IMAGEN DEL LIMON
    ctx.drawImage(
        imagenLimon,
        limonX,
        limonY,
        ANCHO_LIMON,
        ALTURA_LIMON
    );

} 
 
function bajarLimon(){ 
    limonY = limonY + 10; 
    actualizarPantalla(); 
    detectarAtrapado(); 
    detectarPiso(); 
} 
 
function detectarAtrapado(){ 
 
    if(limonX+ANCHO_LIMON > peronajeX && 
       limonX < peronajeX+ANCHO_PERSONAJE && 
       limonY+ALTURA_LIMON > personajeY && 
       limonY < personajeY+ALTURA_PERSONAJE){ 
 
       // alert("ATRAPADO!!"); 
       aparecerLimon(); 
       puntaje=puntaje+1; 
       mostrarEnSapan("txtPuntaje",puntaje); 
 
       if(puntaje==3){ 
        velocidadCaida=150; 
        clearInterval(intervalo); 
        intervalo=setInterval(bajarLimon,velocidadCaida); 
       } 
       if(puntaje==6){ 
        velocidadCaida=100; 
        clearInterval(intervalo); 
        intervalo=setInterval(bajarLimon,velocidadCaida); 
       } 
       if(puntaje==10){ 
        velocidadCaida=50; 
        clearInterval(intervalo); 
        alert("GANADOR") 
       } 
    } 
} 
 
function aparecerLimon(){ 
    limonX=generarAleatorio(0,canvas.width-ANCHO_LIMON); 
    limonY=0 
    actualizarPantalla(); 
} 
 
function detectarPiso(){ 
    if(limonY+ALTURA_LIMON>=canvas.height-ALTURA_SUELO){ 
        aparecerLimon(); 
        vidas=vidas-1; 
        mostrarEnSapan("txtVidas",vidas); 
 
        if(vidas==0){ 
            alert("GAME OVER"); 
            clearInterval(intervalo); 
        }else{ 
            aparecerLimon(); 
        } 
         
    } 
} 
 
function reiniciar(){ 
 
    vidas = 3; 
    puntaje = 0; 
    velocidadCaida = 200; 
 
    mostrarEnSapan("txtVidas", vidas); 
    mostrarEnSapan("txtPuntaje", puntaje); 
 
    clearInterval(intervalo); 
 
    iniciar(); 
}