function calculadora(numero1, numero2, operacion){
    if (operacion === 'suma') {
        return numero1 + numero2;
    } else if (operacion === 'resta') {
        return numero1 - numero2;
    } else if (operacion === 'multiplicacion') {
        return numero1 * numero2;
    } else if (operacion === 'division') {
        if (numero2 !== 0) {
            return numero1 / numero2;
        } else {
            return 'Error: No es posible dividir por cero.';
        }
    } else {
        return 'Operación no válida. Por favor, elige suma, resta, multiplicacion o division.';
    }
}

console.log(calculadora(5, 3, 'suma')); 
console.log(calculadora(8, 2, 'resta')); 
console.log(calculadora(4, 6, 'multiplicacion')); 
console.log(calculadora(10, 2, 'division')); 
console.log(calculadora(7, 0, 'division')); 
console.log(calculadora(4, 6, 'potencia')); 

//otra forma
function calculadora(numero1, numero2, operacion) {
    switch (operacion) {
        case 'suma':
            return numero1 + numero2;
        case 'resta':
            return numero1 - numero2;
        case 'multiplicacion':
            return numero1 * numero2;
        case 'division':
            if (numero2 !== 0) {
                return numero1 / numero2;
            } else {
                return 'Error: No es posible dividir por cero.';
            }
        default:
            return 'Operación no válida. Por favor, elige suma, resta, multiplicacion o division.';
    }
}


console.log(calculadora(5, 3, 'suma')); 
console.log(calculadora(8, 2, 'resta')); 
console.log(calculadora(4, 6, 'multiplicacion')); 
console.log(calculadora(10, 2, 'division'));
console.log(calculadora(7, 0, 'division')); 
console.log(calculadora(4, 6, 'potencia'));