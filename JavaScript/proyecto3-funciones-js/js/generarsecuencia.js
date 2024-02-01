function generarSecuencia(numero){
    // Verificar si el número ingresado es un entero positivo
    if (Number.isInteger(numero) && numero > 0) {
        // Inicializar un array para almacenar la secuencia
        let secuencia = [];

        // Generar la secuencia ascendente desde 1 hasta el número ingresado
        for (let i = 1; i <= numero; i++) {
            secuencia.push(i);
        }
        return secuencia;
    } else {
        console.error("Por favor, ingresa un número entero positivo.");
        return null;
    }
}
const secuenciaGenerada = generarSecuencia(5);  //no lo voy a modificar durante la ejecución
console.log(secuenciaGenerada);