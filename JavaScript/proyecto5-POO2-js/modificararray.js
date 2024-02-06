// Crear un array con más de 2 elementos
let miArray = [10, 20, 30, 40, 50];

// Mostrar el array original en pantalla
document.write("Mi array original es: " + "<b>" + miArray + "</b>" + "<br>" + "<br>");

// Utilizar el método pop() para sacar el último elemento
let elementoSacadoPop = miArray.pop();

// Mostrar el elemento sacado y el array después de pop() en pantalla
document.write("El elemento que sacamos es: " + "<b>" + elementoSacadoPop + "</b>" + "<br>");
document.write("Mi array después de pop() es: " + "<b>" + miArray + "</b>" + "<br>" + "<br>");

// Utilizar el método shift() para sacar el primer elemento
let elementoSacadoShift = miArray.shift();

// Mostrar el elemento sacado y el array después de shift() en pantalla
document.write("El elemento que sacamos es: " + "<b>" + elementoSacadoShift + "</b>" + "<br>");
document.write("Mi array después de shift() es: " + "<b>" + miArray + "</b>");