class Persona{
    constructor(nombre, edad, ciudad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
        this.profesion= profesion;
    }
    
    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años, vivo en la ciudad de 
        ${this.ciudad} y mi profesión es ${this.profesion}`);
    }
}

//instanciar al objeto
const persona1 = new Persona("Juan",25,"Bogotá","Desarrollador Web");
persona1.saludar();

const persona2 = new Persona("Luisa",35,"Argentina","Tester QA");
persona2.saludar();
