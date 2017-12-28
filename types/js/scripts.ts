/* Types: Class Types */

/* Define Interface
 * La interface describe el lado público de una clase */
interface RelojInterface {
  tiempoActual: Date;
  setTime( tiempo: Date );
}

/* Define clase que hereda de una 'Interface'
 * Al heredar la 'Interface' obliga a la clase a declarar los atributos y métodos
 * que esta posee en la clase en la que se implementa */
class Reloj implements RelojInterface {
  /* Atributos */
  tiempoActual: Date;       // Es obligatorio definirla por la 'Interface'

  /* Constructor*/
  constructor( horas: number, minutos: number ) {}

  /* setTime es un método oblicado a definirse por la 'Interface' */
  setTime( tiempo: Date ) {
    this .tiempoActual = tiempo;
  }

  /* getTiempo se declaró pero no esta obligado a ser definido por la'Interface'*/
  getTime() {
    return this .tiempoActual;
  }

}

/* Instancia */
let reloj = new Reloj( 10, 30 );

/* Resultado */
console .log( 'reloj ', reloj );
