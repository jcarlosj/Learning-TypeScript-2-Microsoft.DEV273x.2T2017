/* Crea y exporta una constante */
export const numberRegexp = /^[0-9]+$/;

/* Crea un exporta una contante por defecto o de manera predeterminada */
export default function ( s : string ) {
  return s .length === 5 && numberRegexp .test( s );
}

/* NOTA: Las clases y las declaraciones de funciones se pueden crear directamente
 *       como exportaciones predeterminadas. La clase de exportación predeterminada
 *       y los nombres de declaración de función son opcionales */
