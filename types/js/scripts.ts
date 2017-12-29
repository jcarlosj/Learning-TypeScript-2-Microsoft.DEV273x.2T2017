/* Types: Classes
 * Podemos declarar estructuras de clases en TypeScript */

/* Definición de la clase Animal */
class Animal {
  /* Atributos o propiedades */
  public nombre: string;
  /* Constructor */
  public constructor( nombreDelAnimal: string ) {
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
  constructor() {
    super( 'Rinoceronte' );
  }
  /* Métodos */
  public seMueve( distancia : number ) {
    super .seMueve( distancia );
  }
}

/* Instancias de cada una de las clases */
let animal      = new Animal( 'Ardilla' ),
    rinoceronte = new Rinoceronte();

/* Resultados */
console .group( 'Modificadores (public)' );
  animal .seMueve( 15 );
  rinoceronte .seMueve( 2 );
console .groupEnd();
