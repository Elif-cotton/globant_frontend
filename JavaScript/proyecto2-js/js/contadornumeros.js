//Contador de números pares e impares: Escribe un programa que solicite al usuario ingresar un 
//número entero positivo y luego muestre la cantidad de números pares e impares en ese rango.

let numeroIngresado = parseInt(prompt("Ingresa un número entero positivo:"));

// Verificar si el número ingresado es un entero positivo
if (!isNaN(numeroIngresado) && numeroIngresado > 0) {
    let contadorPares = 0;
    let contadorImpares = 0;

    // Iterar desde 1 hasta el número ingresado
    for (let i = 1; i <= numeroIngresado; i++) {
        if (i % 2 === 0) {
            contadorPares++;
        } else {
            contadorImpares++;
        }
    }

    console.log(`En el rango del 1 al ${numeroIngresado}:`);
    console.log(`Números pares: ${contadorPares}`);
    console.log(`Números impares: ${contadorImpares}`);
    alert(`En el rango del 1 al ${numeroIngresado}:`);
    alert(`Números pares: ${contadorPares}`);
    alert(`Números impares: ${contadorImpares}`);
} else {
    console.log("Por favor, ingresa un número entero positivo válido.");
    alert("Por favor, ingresa un número entero positivo válido.");
}