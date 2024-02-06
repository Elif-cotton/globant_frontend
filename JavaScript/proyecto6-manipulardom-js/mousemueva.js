// Seleccionar el div
const miDiv = document.getElementById('miDiv');

// Agregar un escuchador de eventos para el evento "mouseenter"
miDiv.addEventListener('mouseenter', () => {
    // Mostrar una alerta con un mensaje
    alert('¡El mouse está sobre el elemento!');
});