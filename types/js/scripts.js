/* Types: Funciones y tipo de funciones */
function construirNombre_1(primerNombre, segundoNombre) {
    return primerNombre + ' ' + segundoNombre;
}
//let resultado_1 = construirNombre_1( 'Elisa' );                       // ERROR: Espera dos parámetros obligatorios
//let resultado_2 = construirNombre_1( 'Elisa', 'María', 'Giraldo' );   // ERROR: Se pasan más parámetros de los que espera la función
var resultado_3 = construirNombre_1('Elisa', 'Giraldo'); // OK: Elisa Giraldo
console.log('resultado_3 ', resultado_3);
/* Usando parámetros opcionales (?) */
function construirNombre_2(primerNombre, segundoNombre) {
    if (segundoNombre) {
        return primerNombre + ' ' + segundoNombre;
    }
    else {
        return primerNombre;
    }
}
var resultado_4 = construirNombre_2('Elisa'); // OK: Elisa
//let resultado_5 = construirNombre_2( 'Elisa', 'María', 'Giraldo' );   // ERROR: Se pasan más parámetros de los que espera la función
var resultado_6 = construirNombre_2('Elisa', 'Giraldo'); // OK: Elisa Giraldo
console.log('resultado_4 ', resultado_4);
console.log('resultado_6 ', resultado_6);
/* Usando parámetros valores por defecto */
function construirNombre_3(primerNombre, segundoNombre) {
    if (segundoNombre === void 0) { segundoNombre = "Snaders"; }
    return primerNombre + ' ' + segundoNombre;
}
var resultado_7 = construirNombre_3('Elisa'); // OK: Elisa
var resultado_8 = construirNombre_3('Elisa', undefined); // OK: Elisa, undefined
//let resultado_9 = construirNombre_3( 'Elisa', 'María', 'Giraldo' );   // ERROR: Se pasan más parámetros de los que espera la función
var resultado_10 = construirNombre_3('Elisa', 'Giraldo'); // OK: Elisa Giraldo
console.log('resultado_7 ', resultado_7);
console.log('resultado_8 ', resultado_8);
console.log('resultado_10 ', resultado_10);
