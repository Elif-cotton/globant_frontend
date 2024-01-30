// Declarar una variable 'codigoDescuentoSecreto' y asignarle un valor de texto
let codigoDescuentoSecreto = "SECRETO6789"
// Declarar una variable 'intentosCodigo' y asignarle un valor inicial de 0
let intentosCodigo = 0;

function intentoCodigo() {
    // Solicitar al usuario que ingrese un código
    let codigoIngresado = prompt("Por favor, ingresa un código de descuento:");

    // Convertir el código ingresado a mayúsculas
    codigoIngresado = codigoIngresado.toUpperCase(); 

    // Incrementar el valor de 'intentosCodigo' en 1
    intentosCodigo++;

    // Verificar si el código ingresado es el código secreto
    if (codigoIngresado === codigoDescuentoSecreto) {
        console.log("¡Código correcto! Descuento aplicado.");
        alert("¡Código correcto! Descuento aplicado.");
    } else {
        console.log("Código incorrecto. Intento " + intentosCodigo + " de " + maxIntentosCodigo);
        alert("Código incorrecto. Intento " + intentosCodigo + " de " + maxIntentosCodigo);
    }

    // Verificar si se alcanzó el número máximo de intentos permitidos
    if (intentosCodigo >= maxIntentosCodigo) {
        console.log("Número máximo de intentos alcanzado. Contacta al soporte para obtener ayuda.");
        alert("Número máximo de intentos alcanzado. Contacta al soporte para obtener ayuda.");
    }
     
}

// Declarar una variable 'maxIntentosCodigo' y asignarle un valor constante de 5
const maxIntentosCodigo = 5;

// Realizar 5 intentos de ingresar el código
for (let i = 0; i < maxIntentosCodigo; i++) {
    intentoCodigo();
}