/* Crea y exporta una constante */
export const numberRegexp = /^[0-9]+$/;

/* Crea y exporta una Clase que implementa una 'Interface' */
export class ZipCodeValidator implements StringValidator {
  isAcceptable( s : string ) {
    return s .length === 5 && numberRegexp .test( s );
  }
}
