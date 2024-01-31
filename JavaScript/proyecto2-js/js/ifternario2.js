let precioProductoUsuario = prompt("Ingresa el precio del producto:");

// Convertir el valor ingresado a un número
let precioProducto = parseFloat(precioProductoUsuario);

// Aplicar un descuento del 10% si el precio es mayor o igual a $1000, de lo contrario, ningún descuento
let precioFinal = precioProducto >= 1000 ? precioProducto * 0.9 : precioProducto;

// Mostrar el precio final con el descuento aplicado en la consola, toFixed(2) se utiliza para
//mostrar el precio final con dos decimales, 
console.log(`Precio final con descuento: $${precioFinal.toFixed(2)}`);
alert(`Precio final con descuento: $${precioFinal.toFixed(2)}`);