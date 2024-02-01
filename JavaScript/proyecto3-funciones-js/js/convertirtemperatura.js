function convertirTempratura(celcius){
    let fahrenheit = (celcius * 9/5) + 32;
    return fahrenheit.toFixed(2);
}

console.log(convertirTempratura(0));
console.log(convertirTempratura(100));