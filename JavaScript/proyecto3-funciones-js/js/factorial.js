function factorial(numero){
    if (numero < 0) {
        return "No se puede calcular el factorial de un número negativo.";
    }

    // Inicializar el resultado del factorial
    let resultado = 1;

    // Calcular el factorial del número
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(factorial(5)); // Resultado: 120
console.log(factorial(0)); // Resultado: 1
console.log(factorial(-3))