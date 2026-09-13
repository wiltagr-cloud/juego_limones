function generarAleatorio(min, max){

    let random = Math.random();

    // Ejemplo: max es 600, mínimo es 5
    let numero = random * (max - min);

    let numeroEntero = Math.ceil(numero);

    // Sumamos el mínimo
    numeroEntero = numeroEntero + min;

    return numeroEntero;
}