/* Types: Classes
 * Podemos declarar estructuras de clases en TypeScript */

class Saludar {
  /* Atributos o Propiedades */
  saludo: string;

  /* Consutructor */
  constructor( mensajeSaludo: string ) {
    this .saludo = mensajeSaludo;
  }

  /* Metodos */
  getSaludo() {
    return 'Hola, ' + this .saludo;
  }

}

let unSaludo = new Saludar( 'Mundo!' );

console .log( 'unSaludo ', unSaludo .getSaludo() );
