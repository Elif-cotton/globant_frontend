const prompt = require('prompt-sync')();

let nombreUsuario = prompt("Escribe tú nombre: ");
function saludar(nombre){
    console.log(`¡Hola, ${nombre}! Bienvenido a mi primera función.`);
}
saludar(nombreUsuario);