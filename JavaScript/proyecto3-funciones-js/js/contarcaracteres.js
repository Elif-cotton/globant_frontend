function contarCaracteres(cadena){
    let contar=0;
    let tamano = cadena.length;
   
    for (let i = 0; i < tamano ; i++){
        // Verificar si el caracter actual es una letra (a-z, A-Z), eliminar espacios
        if (cadena[i].match(/[a-zA-Z]/)) {
            contar++;
        }
    }
    console.log(`La cadena "${cadena}" tiene ${contar} caracteres.`);
    return contar;
}

let cadenas = "Hola como estan ustedes";
contarCaracteres(cadenas);