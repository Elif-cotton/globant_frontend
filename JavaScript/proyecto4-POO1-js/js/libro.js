class Libro{
    constructor(titulo, autor, anoPublicacion,genero){
        this.titulo = titulo;
        this.autor=autor;
        this.anoPublicacion=anoPublicacion;
        this.genero=genero;
    }
    informacion() {
        console.log(`El título del libro es ${this.titulo}, su autor es ${this.autor}, el año 
        de publicación fue ${this.anoPublicacion} y pertenece al género ${this.genero}`);
    }
}

const libro1 = new Libro("Harry Potter y la Orden del Fénix","J. K. Rowling",2023,"Ficción");
libro1.informacion();

const libro2 = new Libro("Romper el Hielo","Hannah Grace",2015,"Novelas De Amor");
libro2.informacion();