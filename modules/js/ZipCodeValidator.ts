/* Crea y exporta una constante */
export const numberRegexp = /^[0-9]+$/;

/* Crea y exporta una Clase que implementa una 'Interface' */
class ZipCodeValidator implements StringValidator {
  isAcceptable( s : string ) {
    return s .length === 5 && numberRegexp .test( s );
  }
}

/* Crea y exporta una constante */
export const PI = 3.1415;

/* Cuando las exportaciones deben renombrarse de acuerdo a los ficheros que los consumen
 * podemos renombrarlos de la siguiente manera */
export { ZipCodeValidator };                  // Exportación corriente
export { ZipCodeValidator as mainValidator }  // Exportando con otro nombre 'mainValidator'
