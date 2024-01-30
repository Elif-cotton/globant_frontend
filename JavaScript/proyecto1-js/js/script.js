// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtén la referencia al elemento <p> con el id "mensaje"
    let mensajeElement = document.getElementById("mensaje");
  
    // Cambia el contenido del elemento <p>
    mensajeElement.textContent = "El enlace entre HTML y JavaScript en el header ha sido exitoso!";
  });

  
  // Muestra un mensaje en la consola
console.log("¡Hola! Estás imprimiendo un mensaje por consola");

// Guarda información a través de un prompt
var userInput = prompt("Ingresa tu información:");
console.log("La información ingresada es: " + userInput);

// Muestra un mensaje mediante el método alert
alert("¡Hola! Este es un mensaje utilizando el método alert()");