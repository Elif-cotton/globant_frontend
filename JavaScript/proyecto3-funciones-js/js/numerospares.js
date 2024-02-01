function contarPares(numeroIngresado){
    let contadorPares = 0;
    for (let i = 1; i <= numeroIngresado; i++) {
        if (i % 2 === 0) {
            contadorPares++;
        }
    }
    console.log(`Números pares: ${contadorPares}`);
    return contadorPares;
}
contarPares(10);
contarPares(18);
