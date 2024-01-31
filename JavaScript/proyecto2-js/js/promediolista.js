//Calcular el promedio de una lista de números: Escribe un programa que calcule el promedio
//de una lista de números ingresados por el usuario. El programa debe permitir al usuario elegir
//entre utilizar las estructuras for, while o if para implementar la solución.
let cantidadNumeros = parseInt(prompt("Ingresa la cantidad de números:"));

let suma = 0;
let contador = 0;

while (contador < cantidadNumeros) {
    
    let numero = parseFloat(prompt(`Ingresa el número ${contador + 1}:`));

    if (!isNaN(numero)) {
    
        suma += numero;
        contador++;
    } else {
        console.log("Por favor, ingresa un número válido.");
    }
}

let promedio = suma / cantidadNumeros;

console.log(`El promedio de los números ingresados es: ${promedio}`);
alert(`El promedio de los números ingresados es: ${promedio}`);