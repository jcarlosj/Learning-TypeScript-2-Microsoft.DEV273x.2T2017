/* Types: Class Types */

/* Define Interface
 * El ERROR se produce por que cuando la clase implementa una 'Interface'
 * solo se verifica el lado de la instancia de la clase. Como el constructor
 * se encuentra en el lado estático, no esta incluido en este control */
interface RelojConstructor {
  new ( horas: number, minutos: number );
}

class Reloj implements RelojConstructor {
  tiempoActual: Date;
  constructor( horas: number, minutos: number ) {}
}

/* ERROR:
types/js/scripts.ts(11,7): error TS2420: Class 'Reloj' incorrectly implements interface 'RelojConstructor'.
Type 'Reloj' provides no match for the signature 'new (horas: number, minutos: number): any'.
16:35:51 - Compilation complete. Watching for file changes.
 */
