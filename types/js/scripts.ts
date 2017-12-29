/* Types: Classes
 * Técnicas Avanzadas */

/* Contructor functions
 * Cuando se declara una clase en TS, en realidad está creando múltiples
 * declaraciones al mismo tiempo. El primero es el tipo de la instancia
 * de la clase */

class Saludar {
  /* Atributos o propiedades */
  public saludo: string;
  /* Constructor */
  public constructor( mensajeSaludo : string ) {
    this .saludo = mensajeSaludo;
  }
  /* Métodos */
  public darSaludo () {
    return 'Hola, ' + this .saludo;
  }
}

let saludar: Saludar;               // Creamos una variable con el tipo de la Instancia que vamos a crear
saludar = new Saludar( 'Mundo!' );  // Creamos la Instancia

console .log( saludar .darSaludo() );
