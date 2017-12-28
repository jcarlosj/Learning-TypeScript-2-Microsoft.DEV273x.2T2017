/* Types: Class Types
 * Trabajamos directamente con el lado estático de la clase, osea el constructor()
 * */
/* Definición de dos clases (RelojDigital, RelojAnalogo) que hereda de 'RelojConstructor' */
var RelojDigital = /** @class */ (function () {
    function RelojDigital(horas, minutos) {
    }
    RelojDigital.prototype.tick = function () {
        return 'beep beep';
    };
    return RelojDigital;
}());
var RelojAnalogo = /** @class */ (function () {
    function RelojAnalogo(horas, minutos) {
    }
    RelojAnalogo.prototype.tick = function () {
        return 'tick tock';
    };
    return RelojAnalogo;
}());
/* Función que crea las instancias del tipo que se le pasan */
function crearReloj(constructorReloj, horas, minutos) {
    return new constructorReloj(horas, minutos); // Equivale a: new RelojDigital( horas, minutos ) o new RelojAnalogo( horas, minutos )
}
/* Ejecutamos cada una de las clases sin hacer instanciación de las mismas */
var digital = crearReloj(RelojDigital, 12, 17);
var analogo = crearReloj(RelojAnalogo, 7, 32);
console.group('Reloj');
console.log('Digital ', digital.tick());
console.log('Analogo ', analogo.tick());
console.groupEnd();
