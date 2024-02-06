// Función para obtener un color aleatorio
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Agregar evento de clic al botón para cambiar el color de fondo
document.getElementById('cambiarColorBtn').addEventListener('click', function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});