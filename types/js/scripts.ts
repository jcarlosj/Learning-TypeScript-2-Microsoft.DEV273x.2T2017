/* Types: Classes
 * Podemos declarar estructuras de clases en TypeScript */

/* Definición de la clase con propiedades estáticas */
class Grilla {
  /* Atributos Estáticos */
  static origen = { x: 0, y: 0 };

  /* Constructor */
  public constructor( public escala: number ) {
    this .escala = escala;
  }

  /* Métodos */
  public calcularDistanciaDesdeOrigen( point: { x: number, y: number } ) {
    let distanciaEnX = ( point .x - Grilla .origen .x ),
        distanciaEnY = ( point .y - Grilla .origen .y );

    return Math .sqrt( distanciaEnX * distanciaEnX + distanciaEnY * distanciaEnY ) / this .escala;
  }

}

/* Instancias*/
let grilla1 = new Grilla( 1.0 ),
    grilla2 = new Grilla( 5.0 );

/* Resultados */
console .group( 'Propiedades estáticas' );
  console .log( 'Grilla 1: ', grilla1 .calcularDistanciaDesdeOrigen( { x: 10, y: 10 } ) );
  console .log( 'Grilla 2: ', grilla2 .calcularDistanciaDesdeOrigen( { x: 10, y: 10 } ) );
console .groupEnd();
