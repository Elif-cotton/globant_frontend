const productos = [
    { id:1 , nombre: 'camiseta' , precio: 25.99, stock: 10},
    { id:2 , nombre: 'Pantalón', precio: 34.50, stock: 5},
    { id:3 , nombre: 'Zapatos', precio: 49.99, stock: 3},
    { id:4 , nombre: 'Sombrero', precio: 12.75, stock: 15},
    { id:5 , nombre: 'Calcetines', precio: 6.99, stock: 8}
];

//Tu tarea es utilizar forEach() para iterar sobre cada producto en el arreglo y realizar las siguientes acciones:
//Calcular el valor total de cada producto multiplicando su precio por su cantidad en stock 
//(precio * stock).
productos.forEach(producto => { 
    const precioTotal =  producto.precio * producto.stock;
    console.log(`El precio total del ${producto.nombre} es de $${precioTotal.toFixed(2)}`);  


//Si el valor total del producto es mayor o igual a $100, agregar una propiedad llamada descuento 
//y asignarle el valor del 10% del valor total.

   if (precioTotal >= 100){
        const precioConDescuento = (precioTotal-(precioTotal*0.10)).toFixed(2);
        return console.log(`${producto.nombre} con descuento ($${precioConDescuento}).
        Con un stock ${producto.stock} unidades.`);
   }else {
        return console.log(`No hay descuento para ${producto.nombre}.Su precio es $${precioTotal}.
        Con un stock ${producto.stock} unidades.`);;
   }
});


//Imprimir en la consola el nombre del producto, su precio, su cantidad en stock,
// y si tiene un descuento, mostrar también el monto del descuento.
 

