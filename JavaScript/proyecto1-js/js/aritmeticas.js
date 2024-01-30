// Suma
let num1Suma = 5;
let num2Suma = 7;
let resultadoSuma = num1Suma + num2Suma;
console.log(`Suma: ${resultadoSuma}`);

// Resta
let num1Resta = 10;
let num2Resta = 3;
let resultadoResta = num1Resta - num2Resta;
console.log(`Resta: ${resultadoResta}`);

// Multiplicación
let num1Multiplicacion = 4;
let num2Multiplicacion = 6;
let resultadoMultiplicacion = num1Multiplicacion * num2Multiplicacion;
console.log(`Multiplicación: ${resultadoMultiplicacion}`);

// División
let num1Division = 20;
let num2Division = 5;
let resultadoDivision = num1Division / num2Division;
console.log(`División: ${resultadoDivision}`);

// Resto de la división
let num1Resto = 13;
let num2Resto = 4;
let resultadoResto = num1Resto % num2Resto;
console.log(`Resto de la división: ${resultadoResto}`);

// Incremento
let numIncremento = 8;
numIncremento++;
console.log(`Incremento: ${numIncremento}`);

// Decremento
let numDecremento = 15;
numDecremento--;
console.log(`Decremento: ${numDecremento}`);

// Cuadrado
let numCuadrado = 9;
let resultadoCuadrado = numCuadrado ** 2;
console.log(`Cuadrado: ${resultadoCuadrado}`);

// Redondeo
let numDecimal = 8.75;
let resultadoRedondeo = Math.round(numDecimal);
console.log(`Redondeo: ${resultadoRedondeo}`);

// Número aleatorio en un rango específico
let min = 1;
let max = 10;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Número aleatorio entre ${min} y ${max}: ${numeroAleatorio}`);

//otra forma

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Definir el rango deseado
let rangoMinimo = 5;
let rangoMaximo = 15;

// Llamar a la función para obtener un número aleatorio dentro del rango
let numeroAleatorio2 = generarNumeroAleatorio(rangoMinimo, rangoMaximo);

// Mostrar el resultado en la consola
console.log(`Número aleatorio entre ${rangoMinimo} y ${rangoMaximo}: ${numeroAleatorio2}`);