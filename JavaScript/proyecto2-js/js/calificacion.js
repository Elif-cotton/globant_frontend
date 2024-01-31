//Solicita al usuario ingresar su calificación.
let calificacionUsuario = prompt ('Ingrese su calificación');

//Convierte el valor ingresado a un número para asegurarte de que esté en formato numérico.
let calificacion= parseFloat(calificacionUsuario);

//Utiliza una estructura if para evaluar la calificación:Si la calificación es mayor o igual a 70,
// muestra el mensaje "Felicidades, ¡aprobaste el examen!".Si la calificación es menor a 70, 
//muestra el mensaje "Lo siento, no aprobaste el examen. ¡Sigue estudiando!".

// Verificar la calificación con una estructura if, isNaN significa "is Not a Number" (no es un número). 
//En JavaScript, isNaN es una función que se utiliza para determinar si un valor no es un número.
//Cuando se utiliza isNaN(valor), la función devuelve true si el valor no es un número y false si es un número. 
if (!isNaN(calificacion)) {
    // La calificación es un número válido

    if (calificacion >= 70) {
        console.log("Felicidades, ¡aprobaste el examen!");
        alert("Felicidades, ¡aprobaste el examen!");
    } else {
        console.log("Lo siento, no aprobaste el examen. ¡Sigue estudiando!");
        alert("Lo siento, no aprobaste el examen. ¡Sigue estudiando!");
    }

} else {
    // El valor ingresado no es un número válido
    console.log("Por favor, ingresa una calificación válida.");
    alert("Por favor, ingresa una calificación válida.");
}


