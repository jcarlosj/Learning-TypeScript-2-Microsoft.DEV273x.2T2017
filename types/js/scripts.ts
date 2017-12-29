/* Types: Classes
 * Podemos declarar estructuras de clases en TypeScript */

/* Definición de la clase Animal */
class Animal {
  /* Atributos o propiedades */
  public nombre: string;
  /* Constructor */
  constructor( nombreDelAnimal: string ) {
    this .nombre = nombreDelAnimal;
  }
}

/* Definición de la clase Rinceronte heredando de la clase 'Padre' Animal */
class Rinoceronte extends Animal {
  /* Constructor */
  constructor() {
    super( 'Rinoceronte' );
  }
}

/* Definición de la clase Empleado */
class Empleado {
  /* Atributos o propiedades */
  private nombre: string;
  /* Constructor */
  constructor( nombreDelEmpleado: string ) {
    this .nombre = nombreDelEmpleado;
  }
}

/* Instancias de cada una de las clases */
let animal      = new Animal( 'Ardilla' ),
    rinoceronte = new Rinoceronte(),
    empleado    = new Empleado( 'Bernard' );

/* Resultados */
console .group( 'Antes de asignar (animal = rinoceronte;)' );
  console .log( 'animal ', animal .nombre );
  console .log( 'rinoceronte ', rinoceronte .nombre );
console .groupEnd();

animal = rinoceronte;
//animal = empleado /* ERROR: La el objeto 'Animal' no es compatible con el objeto 'Empleado' */

console .group( 'Después de asignar (animal = rinoceronte;)' );
  console .log( 'animal ', animal .nombre );
  console .log( 'rinoceronte ', rinoceronte .nombre );
console .groupEnd();
