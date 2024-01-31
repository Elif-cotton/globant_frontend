//Actividad Condicionales: Switch
//Escribe un programa que reciba un número del 1 al 7 y muestre en la consola el día de la semana
// correspondiente utilizando la estructura switch.

let numeroDia = prompt('Ingrese un número entre 1 y 7');

let numeroEntero = parseFloat(numeroDia);

let diasemana;

switch(numeroEntero){
    case 1: 
        diasemana = 'Lunes';
        break;
    case 2:
        diasemana = 'Martes';
        break;
    case 3:
        diasemana = 'Miércoles';
        break;
    case 4:
        diasemana = 'Jueves';
        break;
    case 5:
        diasemana = 'Viernes';
        break;
    case 6:
        diasemana = 'Sábado';
        break;
    case 7:
        diasemana = 'Domingo';
        break;
    default:
        diaSemana = "Número no válido";
}
console.log(`El día de la semana correspondiente al número ${numeroEntero} es ${diaSemana}`);
alert();