class Calculadora{
    
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    sumar(a,b){
        return a + b;
    }
    restar(a,b) {
        return a - b;
    }
    multiplicar (a,b){
       return a * b;  
    }
    dividir (a,b) {
        if (b == 0 ) {
            console.log("No se puede dividir entre cero");
        } else {
            return a / b;
        }
    }
    raizCuadrada (a) {
        return Math.sqrt(a);
    }
    raizCubica (a) {
        return Math.pow(a, 1/3);
        
    }
    potencia (a,b) {
        return Math.pow(a,b);
    }
        
}

// Inicialización
const calculadora = new Calculadora();

let operacion = prompt( "Ingrese la operación que desea realizar (sumar, restar, multiplicar, dividir, raizCuadrada, raizCubica, potencia):").toLowerCase();

if (!["sumar", "restar", "multiplicar", "dividir", "potencia", "raizcuadrada", "raizcubica"].includes(operacion)) {
    prompt("Operación no válida. Por favor, ingrese una operación válida.");
} else {
    let resultado;

    if (operacion === "raizcuadrada" || operacion === "raizcubica") {
        const num = parseFloat(prompt("Ingrese el número:"));
        
        if (!isNaN(num)) {
            resultado = (operacion === "raizcuadrada") ? calculadora.raizCuadrada(num) : calculadora.raizCubica(num);
        } else {
            resultado = "Número no válido";
        }
    } else {
        const num1 = parseFloat(prompt("Ingrese el primer número:"));
        const num2 = parseFloat(prompt("Ingrese el segundo número:"));


        switch (operacion) {
            case "sumar":
                resultado = calculadora.sumar(num1, num2);
                break;
            case "restar":
                resultado = calculadora.restar(num1, num2);
                break;
            case "multiplicar":
                resultado = calculadora.multiplicar(num1, num2);
                break;
            case "dividir":
                resultado = calculadora.dividir(num1, num2);
                break;
            case "potencia":
                resultado = calculadora.potencia(num1, num2);
                break;
            case "raizcuadrada":
                resultado = calculadora.raizCuadrada(num1);
                break;
            case "raizcubica":
                resultado = calculadora.raizCubica(num2);
                break;
            default:
                resultado = "Operación no válida";
        }
    }
    console.log(`Resultado de ${operacion}: ${resultado}`);
    alert(`Resultado de ${operacion}: ${resultado}`);
}
