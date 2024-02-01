class Circulo{
    constructor(radio){
        if (radio <= 0) {
            console.error("Error: El radio debe ser un valor positivo.");
            return;
        }
        
        this._radio = radio;
        
    }
    get radio(){
        return this._radio;
    }
    
    // Setter para cambiar el radio del círculo
    set radio(nuevoRadio) {
        // Validar que el nuevo radio sea un valor positivo
        if (nuevoRadio <= 0) {
            console.error("Error: El nuevo radio debe ser un valor positivo.");
            return;
        }

        // Cambiar el radio del círculo
        this._radio = nuevoRadio;
    }

    get area(){
        return Math.PI * Math.pow(this.radio,2);
    }
    
    get circunferencia(){
        return 2*Math.PI*this.radio;
    }

}
    

const circulo = new Circulo(5);
console.log(`Radio: ${circulo.radio}`);
console.log(`Área del círculo de radio ${circulo.radio} es: ${circulo.area.toFixed(2)}`);
console.log(`La circunferencia del círculo es ${circulo.circunferencia.toFixed(2)}`);

circulo.radio= 7;
console.log(`Nuevo radio: ${circulo.radio}`);
console.log(`Área del círculo de radio ${circulo.radio} es: ${circulo.area.toFixed(2)}`);
console.log(`La circunferencia del círculo es ${circulo.circunferencia.toFixed(2)}`);

circulo.radio= -3;