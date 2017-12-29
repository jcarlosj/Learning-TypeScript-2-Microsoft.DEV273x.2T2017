/* Types: Classes
 * Podemos declarar estructuras de clases en TypeScript */

/* Definición de la clase Animal */
class Animal {
  /* Atributos o propiedades */
  protected nombre: string;
  /* Constructor */
  protected constructor( nombreDelAnimal: string ) {
    this .nombre = nombreDelAnimal;
  }
  /* Métodos */
  public seMueve( distancia : number ) {
    console .log( `${this .nombre} se ha movido ${distancia}mts` );
  }
}

/* Definición de la clase Rinceronte heredando de la clase 'Padre' Animal */
class Rinoceronte extends Animal {
  /* Constructor */
  public constructor() {
    super( 'Rinoceronte' );
  }
  /* Métodos */
  public camina( distancia : number ) {
    console .log( `${this .nombre} se ha caminado ${distancia}mts` );
  }
}

/* Instancias de cada una de las clases */
let //animal      = new Animal( 'Ardilla' ), // No puedo realizar la instancia por que el Constructor es de tipo protected
    rinoceronte = new Rinoceronte();

/* Resultados */
console .group( 'Modificadores (protected)' );
  rinoceronte .camina( 2 );
console .groupEnd();
