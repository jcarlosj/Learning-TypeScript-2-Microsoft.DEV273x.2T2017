/* Types: Class Types
 * Trabajamos directamente con el lado estático de la clase, osea el constructor()
 * */

/* Definición de Interface que controla la creación del constructor */
interface RelojConstructor {
  new ( horas: number, minutos: number ) : RelojInterface;    /* Heredando de la Interface (RelojInterface) */
}
interface RelojInterface {
  tick();
}

/* Definición de dos clases (RelojDigital, RelojAnalogo) que hereda de 'RelojConstructor' */
class RelojDigital implements RelojConstructor {
  constructor( horas: number, minutos: number ) {}
  tick() {
    return 'beep beep';
  }
}
class RelojAnalogo implements RelojConstructor {
  constructor( horas: number, minutos: number ) {}
  tick() {
    return 'tick tock';
  }
}

/* Función que crea las instancias del tipo que se le pasan */
function crearReloj( constructorReloj: RelojConstructor, horas: number, minutos: number ) : RelojInterface {
  return new constructorReloj( horas, minutos );    // Equivale a: new RelojDigital( horas, minutos ) o new RelojAnalogo( horas, minutos )
}

/* Ejecutamos cada una de las clases sin hacer instanciación de las mismas */
let digital = crearReloj( RelojDigital, 12, 17 );
let analogo = crearReloj( RelojAnalogo, 7, 32 );

console .group( 'Reloj' );
  console .log( 'Digital ', digital .tick() );
  console .log( 'Analogo ', analogo .tick() );
console .groupEnd();
