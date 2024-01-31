//Juego de adivinanzas numéricas: Escribe un programa de adivinanzas numéricas en el que el 
//usuario debe adivinar un número secreto. El programa debe combinar las tres estructuras: for, 
//while e if, para implementar la lógica del juego.

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
const maxIntentos = 5;
let intentos = 0;

for (let i = 0; i < maxIntentos; i++) {
    
    let intentoUsuario = parseInt(prompt(`Intento ${i + 1}: Adivina el número secreto (entre 1 y 10):`));

    if (!isNaN(intentoUsuario)) {
        if (intentoUsuario === numeroSecreto) {
            console.log(`¡Felicidades! Adivinaste el número secreto (${numeroSecreto}) en ${intentos + 1} intentos.`);
            alert(`¡Felicidades! Adivinaste el número secreto (${numeroSecreto}) en ${intentos + 1} intentos.`);
            break; 
        } else {
            console.log("Número incorrecto. ¡Sigue intentando!");
            alert("Número incorrecto. ¡Sigue intentando!");
        }
    } else {
        console.log("Por favor, ingresa un número válido.");
        alert("Por favor, ingresa un número válido.");
        i--;
    }

    intentos++;

   
    if (intentos === maxIntentos) {
        console.log(`Lo siento, has agotado tus ${maxIntentos} intentos. El número secreto era: ${numeroSecreto}`);
        alert(`Lo siento, has agotado tus ${maxIntentos} intentos. El número secreto era: ${numeroSecreto}`);
    }
}