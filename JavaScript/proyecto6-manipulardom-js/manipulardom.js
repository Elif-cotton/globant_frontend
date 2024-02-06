const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Este es mi nuevo contenido!';
container.appendChild(content);

// Crear un párrafo con texto rojo
const paragraph = document.createElement('p');
paragraph.textContent = '¡Hey, soy rojo!';
paragraph.style.color = 'red';

// Crear un encabezado h3 con texto azul
const heading = document.createElement('h3');
heading.textContent = '¡Soy un h3 azul!';
heading.style.color = 'blue';

// Crear un div con borde negro y fondo rosa
const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

// Crear un encabezado h1 dentro del div
const innerHeading = document.createElement('h1');
innerHeading.textContent = '¡Estoy dentro de un div!';

// Crear un párrafo dentro del div
const innerParagraph = document.createElement('p');
innerParagraph.textContent = '¡YO TAMBIÉN!';

// Agregar el encabezado h1 y el párrafo al div
div.appendChild(innerHeading);
div.appendChild(innerParagraph);

// Agregar los elementos al contenedor principal
container.appendChild(paragraph);
container.appendChild(heading);
container.appendChild(div);