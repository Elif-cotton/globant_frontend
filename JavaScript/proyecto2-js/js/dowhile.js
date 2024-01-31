//Actividad Estructuras Repetitivas:  Do While
//Escribe un programa que solicite al usuario que ingrese una serie de números positivos y
//calcule la suma de todos los números ingresados. El programa debe dejar de solicitar números
//cuando se ingrese un número negativo y mostrar la suma total de los números positivos ingresados.

let suma = 0;

do  {
    let numero = parseInt(prompt("Ingrese un numero"));

    if (numero>=0){
        suma += numero;
    } else{
        break;
    }
} while (true);
    
console.log(`La suma total de los números positivos ingresados es de ${suma}`);
alert(`La suma total de los números positivos ingresados es de ${suma}`);