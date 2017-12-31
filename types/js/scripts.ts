/* Types: Funciones y tipo de funciones */

/* Rest Parameters (Resto de parámetros)
   Se tratan como un número ilimitado de parámetros opcionales */
function construirNombre( primerNombre : string, ...elRestoDelNombre : string[] ) {
  return primerNombre + ' ' + elRestoDelNombre .join( ' ' );
}

let chica = construirNombre( 'Elisa', 'Maria', 'Giraldo' );
let chico = construirNombre( 'Juan', 'Carlos', 'Jiménez', 'Gutiérrez' );

console .log( 'chica ', chica );
console .log( 'chico ', chico );

/* Otra Forma */
let construirNombreFn: ( primerNombre: string, ...loDemas : string[] ) => string = construirNombre;

console .log( 'Como funcion ', construirNombreFn( 'Clara', 'Margarita', 'María', 'Rey', 'Plazas' ) );
