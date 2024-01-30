// Solicita al usuario su nombre
let nombreUsuario = prompt("Por favor, ingresa tu nombre:");

// Verifica si el usuario ingresó un nombre
if (nombreUsuario !== null && nombreUsuario !== "") {
    // Construye una frase personalizada de bienvenida
    let mensajeBienvenida = "¡Hola, " + nombreUsuario + "! Bienvenido a nuestro sitio.";

    // Muestra la frase personalizada en la consola y en un alert
    console.log(mensajeBienvenida);
    alert(mensajeBienvenida);
} else {
    // Si el usuario no ingresó un nombre, muestra un mensaje de error
    alert("¡Por favor, ingresa un nombre válido!");
}

// Solicitar al usuario su año de nacimiento
let añoNacimiento = prompt("Por favor, ingresa tu año de nacimiento:");
// Verificar si el usuario ingresó un año de nacimiento válido
if (añoNacimiento !== null && añoNacimiento !== "" && !isNaN(añoNacimiento)) {
    // Obtener el año actual
    let añoActual = new Date().getFullYear();

    // Calcular la edad del usuario
    let edadUsuario = añoActual - parseInt(añoNacimiento);

    // Crear un mensaje con la edad
    let edad = "Tienes " + edadUsuario + " años.";

    // Imprimir el mensaje en la consola
    console.log(edad);

    // Mostrar un alert con el mensaje de la edad
    alert(edad);
} else {
    // Si el usuario no ingresó un año de nacimiento válido, mostrar un mensaje de error
    console.error("¡Por favor, ingresa un año de nacimiento válido!");
    alert("¡Por favor, ingresa un año de nacimiento válido!");
}
