
/* Types:
 * Función Clasica de JavaScript no usa tipos
 */

/* Funciones TypeScript */
function addNumbers( x: number, y: number ) {
    return x + y;
}
function addStrings( x: string, y: string ) {
    return x + y;
}

/* Ejecución */
console .log( addNumbers( 1, 4 ) );              // 5
console .log( addStrings( 'Birth', 'day' ) );    // Birthday
console .log( addStrings( 1, 'day' ) );          // 1day
