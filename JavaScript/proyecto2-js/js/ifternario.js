//Actividad Condicionales: If ternario
//Escribe un programa que solicite al usuario ingresar el precio de un producto y aplique un 
//descuento del 10% si el precio es mayor o igual a $1000, y ningún descuento en caso contrario. 
//Luego, muestra en la consola el precio final con el descuento aplicado.

let precioProducto =  prompt ('Ingrese el precio del producto')

let precio= parseFloat(precioProducto);

let descuento = precio >= 1000 ? (precio * 0.1) : 0;

let precioFinal = precio - descuento;

console.log(`El precio fina es ${precioFinal}`);
alert(`El precio final es ${precioFinal}`);
