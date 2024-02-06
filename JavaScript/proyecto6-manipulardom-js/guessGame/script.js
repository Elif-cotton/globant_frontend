const buttonElem = document.querySelector('.check');
buttonElem.addEventListener("click", () => {
  let oldText = buttonElem.innerText;
  const result = (buttonElem.innerText =
    oldText == "CHECK!" ? "OFF" : "CHECK!");
  return result;
});


const tituloPrincipal = document.getElementById('titulo-principal');

// Cambiar el texto del elemento h1
tituloPrincipal.textContent = 'JUEGO DE ADIVINAR';


// Seleccionar el elemento con la clase .message y modificar el mensaje
const messageElement = document.querySelector('.message');
messageElement.textContent = "⛔️ Ingrese Numero!";

// Seleccionar el elemento con la clase .number y modificar el número
const numberElement = document.querySelector('.number');
numberElement.textContent = "25"; // Por ejemplo, cambiarlo al número deseado

// Seleccionar el elemento con la clase .guess y modificar el valor
const guessElement = document.querySelector('.guess');
guessElement.value = "30"; 

// Seleccionar el body del HTML y modificar el color de fondo
const bodyElement = document.body;
bodyElement.style.backgroundColor = "#C9C9C9"; // Por ejemplo, cambiarlo al color deseado