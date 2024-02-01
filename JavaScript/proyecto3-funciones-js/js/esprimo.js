function esPrimo(numero){
    if (numero <= 1) {
        return false;
    }

    // Iterar desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        // Si el número es divisible por algún otro número, no es primo
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(esPrimo(2)); //si
console.log(esPrimo(3));  //si
console.log(esPrimo(4));
console.log(esPrimo(5)); //si
console.log(esPrimo(6));