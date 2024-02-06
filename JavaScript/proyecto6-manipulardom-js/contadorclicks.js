// Seleccionar el botón y el párrafo
const btnClics = document.getElementById('btnClics');
const contador = document.getElementById('contador');

// Inicializar el contador
let clics = 0;

// Agregar un escuchador de eventos al botón
btnClics.addEventListener('click', () => {
    // Incrementar el contador
    clics++;
    // Actualizar el texto del párrafo con el valor del contador
    contador.textContent = clics;
});