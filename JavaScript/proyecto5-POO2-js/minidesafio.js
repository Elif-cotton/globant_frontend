//1.¿Cómo usarías el objeto Math para mostrar números aleatorios del 10 al 50?
let numeroAleatorio = Math.floor(Math.random() * (50 - 10 + 1) ) +  10;
console.log("Número Aleatorio: " + numeroAleatorio);
//(50 - 10 + 1): Esto calcula la diferencia entre el límite superior (50) y el límite inferior (10) del rango, y luego suma 1. En este caso, (50 - 10 + 1) es igual a 41. 
//+ 10: Suma el límite inferior del rango (10). Esto traslada el rango al inicio deseado del intervalo (10 en este caso).

//2.¿Cómo mostrarías en pantalla 100 números aleatorios?
for (let i = 0; i < 100; i++) {
    let numeroAleatorio = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    console.log(`Número aleatorio ${i + 1}: ${numeroAleatorio}`);
}