/* Types: Interfaces */

// Interface
interface Punto {
  /* Define las propiedades como de solo lectura */
  readonly coordenada_X : number;
  readonly coordenada_Y : number;
}

// Creamos un objeto literal
let punto1 : Punto = {
  coordenada_X: 10,
  coordenada_Y: 20
};

/* Mostramos el Objeto */
console .log( 'punto1 ', punto1 );

/* Asignamos nuevo valor a X */
//  punto1 .coordenada_X = 5;      // ERROR: por que la propiedad es solo de lectura
