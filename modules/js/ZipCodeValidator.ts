/* Crea y exporta una constante */
export const numberRegexp = /^[0-9]+$/;

/* Crea y exporta una Clase que implementa una 'Interface' */
export default class ZipCodeValidator implements StringValidator {
  isAcceptable( s : string ) {
    return s .length === 5 && numberRegexp .test( s );
  }
}

/* Crea y exporta una constante */
export const PI = 3.1415;

/* NOTA: Las clases y las declaraciones de funciones se puede crear directamente
 *       como exportaciones predeterminadas. La clase de exportación predeterminada
 *       y los nombres de declaración de función son opcionales */
