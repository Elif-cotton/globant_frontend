// Array de números
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// Parte 1:
// Crea una nueva variable llamada "primerosTres" que contenga los tres primeros elementos del 
//array "numeros". Luego, muestra "primerosTres" en la consola.
let primeroTres =  numeros.slice(0, 3);
console.log("Parte 1:",primeroTres);

// Parte 2:
// Crea una nueva variable llamada "ultimosCuatro" que contenga los cuatro últimos elementos del 
//array "numeros". Luego, muestra "ultimosCuatro" en la consola.
let ultimosCuatro =  numeros.slice(-4);
console.log("Parte 2:",ultimosCuatro);

// Parte 3:
// Crea una nueva variable llamada "segmentoCentral" que contenga los elementos desde el índice 3
// hasta el índice 7 (ambos inclusive) del array "numeros". Luego, muestra "segmentoCentral" en la consola.
let segmentoCentral = numeros.slice(3,8);
console.log("Parte 3:",segmentoCentral);

// Parte 4:
// Crea una nueva variable llamada "segmentoSaltado" que contenga cada segundo elemento del array
// "numeros", empezando desde el segundo elemento. Luego, muestra "segmentoSaltado" en la consola.
let segmentoSaltado1 = numeros.slice(1, numeros.length, 2); //no funciona solo se usa con dos valores
console.log("Parte 4:", segmentoSaltado1);

let segmentoSaltado = numeros.filter((_, index) => index % 2 !== 0);
console.log("Parte 4:",segmentoSaltado); 

// Parte 5:
// Crea una nueva variable llamada "arrayOriginal" que contenga una copia exacta del array 
//"numeros" utilizando "slice()".Luego, modifica el valor de uno de los elementos en 
//"arrayOriginal" y muestra ambos arrays ("numeros" y "arrayOriginal") en la consola para 
//verificar que el cambio solo se refleja en "arrayOriginal".
let arrayOriginal =  numeros.slice();
arrayOriginal[3] = 99;
console.log("Parte 5: Antes de cambiar el valor:\nNumeros: ", numeros,"\nArray Original: ", arrayOriginal);