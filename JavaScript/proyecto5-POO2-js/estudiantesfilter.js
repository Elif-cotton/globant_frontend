const estudiantes = [
    { nombre: 'Ana', edad: 20, promedio: '9.5'},
    { nombre: 'Pedro', edad: 22, promedio: '7.8'},
    { nombre: 'María', edad: 19, promedio: '8.2'},
    { nombre: 'Juan', edad: 21, promedio: '6.5'},
    { nombre: 'Luisa', edad: 23, promedio: '9.0'}
];

const estudiantesAprobados =  estudiantes.filter(estudiante => estudiante.promedio >= 7);
console.log(`Los estudiantes que aprobaron son: ${estudiantesAprobados.map(e=>`${e.nombre}`).join(', ')}.`);
console.log("Estudiantes Aprobados",estudiantesAprobados);

estudiantesAprobados.forEach(estudiante => {
    console.log(`${estudiante.nombre} - Edad ${estudiante.edad}- Promedio de notas ${estudiante.promedio}`);
});





