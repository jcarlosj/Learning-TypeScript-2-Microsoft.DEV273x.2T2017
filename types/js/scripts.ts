/* Types: Classes
 * Podemos declarar estructuras de clases en TypeScript */

/* Definición de la clase Pulpo */
class Pulpo {
  /* Atributos tipo readonly */
  readonly nombre: string;
  readonly numeroDeTentaculos = 8;    // Obliga a definir un valor en la declaración
  public constructor( elNombre: string ) {
    this .nombre = elNombre;          // o Obliga a definir un valor en el constructor (dinámino o no)
  }
}

/* Instancia */
let pulpo = new Pulpo( 'Octopus' );

/* Si intentamos realizar cambios a los Atributos nos dará ERROR (pues son de solo lectura) */
// pulpo .nombre = 'Ahora me llamo Jorge'; // ERROR
// pulpo .numeroDeTentaculos = 5 // ERROR

/* Resultados */
console .group( 'Modificadores (readonly)' );
  console .log( 'Nombre: ', pulpo .nombre );
  console .log( '# tentaculos: ', pulpo .numeroDeTentaculos );
console .groupEnd();
