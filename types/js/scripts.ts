/* Types: Class Types */

/* Define Interface */
interface RelojConstructor {
  new ( horas: number, minutos: number );
}

class Reloj implements RelojConstructor {
  tiempoActual: Date;
  constructor( horas: number, minutos: number ) {}
}
