/* Types: Classes
 * Técnicas Avanzadas */

/* Contructor functions
 * Cuando se declara una clase en TS, en realidad está creando múltiples
 * declaraciones al mismo tiempo. El primero es el tipo de la instancia
 * de la clase */

class Saludar {
  /* Atributo */
  static saludoEstandar = 'Qué más!';
  saludo : string;

  /* Métodos */
  darSaludo() {
    if( this .saludo ) {
      return 'Hola, ' + this .saludo;
    }
    else {
      return Saludar .saludoEstandar;
    }
  }
}

/* Instancia FORMA 1 */
let saludo1: Saludar;        // Declara una variable con el tipo de la misma Instancias
saludo1 = new Saludar();      // Instancia la clase en la variable del mismo tipo

console .log( 'saludo1 ', saludo1 .darSaludo() );

/*Crea variable que contiene la clase en sí (osea la función constructora) */
let unSaludo: typeof Saludar = Saludar;               // typeof obtiene el tipo de clase (en lugar del tipo de instancia, con el que se obtendran todos los miembros estáticos de "Saludar")
unSaludo .saludoEstandar = "Que tal y entonces!";

let saludo2: Saludar = new unSaludo();             // Obtenemos acceso a todos los miembros no estáticos de la clase "Saludar"
console .log( 'saludo2 ',  saludo2 .darSaludo() );
