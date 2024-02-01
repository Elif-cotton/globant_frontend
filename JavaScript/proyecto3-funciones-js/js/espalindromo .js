function esPalindromo (cadena){
    const cadenaSinEspacios = cadena.toLowerCase().replace(/\s/g, '');

    // Comparar la cadena original con su reverso
    return cadenaSinEspacios === cadenaSinEspacios.split('').reverse().join('');
}

console.log(esPalindromo("Anita lava la tina")); // Resultado: true
console.log(esPalindromo("Hola mundo")); // Resultado: false
console.log(esPalindromo("A man a plan a canal Panama")); // Resultado: true

//replace(/\s/g, ''): Utiliza una expresión regular (/\s/g) para coincidir con todos los caracteres de espacio en blanco (\s) y los reemplaza por una cadena vacía (''). Esto elimina efectivamente todos los espacios de la cadena.
//cadenaSinEspacios.split('').reverse().join(''): Esta cadena de métodos se utiliza para invertir la cadena modificada cadenaSinEspacios.
//split(''): Divide la cadena en un array de caracteres.
//reverse(): Invierte el orden de los elementos en el array.
//join(''): Une los elementos del array nuevamente en una cadena.

//otra forma
function esPalindromo(cadena) {
    const cadenaSinEspacios = cadena.toLowerCase().replace(/\s/g, '');

    for (let i = 0; i < Math.floor(cadenaSinEspacios.length / 2); i++) {
        if (cadenaSinEspacios[i] !== cadenaSinEspacios[cadenaSinEspacios.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(esPalindromo("Anita lava la tina")); // Resultado: true
console.log(esPalindromo("Hola mundo")); // Resultado: false
console.log(esPalindromo("A man a plan a canal Panama")); // Resultado: true