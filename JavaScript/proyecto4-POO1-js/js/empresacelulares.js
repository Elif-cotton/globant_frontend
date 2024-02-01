class Celular{
    constructor(color,peso,rdp,rdc,ram,encendido){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = rdp;
        this.resolucionCamara = rdc;
        this.ram = ram;
        this.estadoEncendido =  encendido;
    }

    btnEncendido(){
        if (this.estadoEncendido == false) {
            console.log("Se ha encendido el celular");
            this.estadoEncendido = true;
        } else {
            console.log("El celular ya estaba encendido")
        }
    }

    btnReiniciar(){
        if (this.estadoEncendido) {
            console.log("Se está reiniciando el celular...");
            this.encendido=true;
        } else {
          console.log("No se puede reiniciar, el celular está apagado.");
        }
    }

    tomarFoto(){
        if (this.encendido) {
            console.log(`Se ha tomado una foto con resolución de ${this.resolucionCamara}.`);
          } else {
            console.log("Enciende el celular para tomar una foto.");
        }
    }

    mostrarInfo() {
        return `Color: ${this.color}, Peso: ${this.peso}, RAM: ${this.ram}`;
    }

}

const celular = new Celular("azul","150g", "6", "12MP","4GB",false);
celular.btnEncendido();
celular.btnReiniciar();
celular.tomarFoto();
const infoCelular = celular.mostrarInfo();
console.log(infoCelular);
//otra forma
console.log(celular.mostrarInfo());

class CelularAltaGama extends Celular {
    constructor(color, peso, rdp, rdc, ram, encendido, resolucionCamaraExtra) {
      super(color, peso, rdp, rdc, ram, encendido);
      this.resolucionCamaraExtra = resolucionCamaraExtra;
    }
}
// Crear dos instancias de CelularAltaGama
const celularAltaGama1 = new CelularAltaGama("Negro", "160g", "6", "12MP", "8GB", false, "16MP");
const celularAltaGama2 = new CelularAltaGama("Blanco", "155g", "6.2", "14MP", "12GB", true, "20MP");

// Mostrar información de los celulares de alta gama
celularAltaGama1.btnEncendido();
celularAltaGama1.btnReiniciar();
celularAltaGama1.tomarFoto();
console.log("Información del Celular de Alta Gama 1:");
console.log(celularAltaGama1.mostrarInfo());
console.log(`Resolución de Cámara Extra: ${celularAltaGama1.resolucionCamaraExtra}\n`);

console.log("Información del Celular de Alta Gama 2:");
console.log(celularAltaGama2.mostrarInfo());
console.log(`Resolución de Cámara Extra: ${celularAltaGama2.resolucionCamaraExtra}`);