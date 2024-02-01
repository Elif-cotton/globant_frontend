function formatoTitulo(cadena){
    // Dividir la cadena en palabras
  const palabras = cadena.split(" ");

  // Aplicar formato a cada palabra
  const palabrasFormateadas = palabras.map((palabra) => {
    // Convertir la primera letra a mayúscula y el resto a minúscula
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });

  // Unir las palabras formateadas para obtener la cadena final
  const resultado = palabrasFormateadas.join(" ");

  return resultado;
}

console.log(formatoTitulo("bienvenido a mi mundo")); // Debe imprimir: Bienvenido A Mi Mundo