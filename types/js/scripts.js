/* Types: Class Types */
/* Define clase que hereda de una 'Interface'
 * Al heredar la 'Interface' obliga a la clase a declarar los atributos y métodos
 * que esta posee en la clase en la que se implementa */
var Reloj = /** @class */ (function () {
    /* Constructor*/
    function Reloj(horas, minutos) {
    }
    /* setTime es un método oblicado a definirse por la 'Interface' */
    Reloj.prototype.setTime = function (tiempo) {
        this.tiempoActual = tiempo;
    };
    /* getTiempo se declaró pero no esta obligado a ser definido por la'Interface'*/
    Reloj.prototype.getTime = function () {
        return this.tiempoActual;
    };
    return Reloj;
}());
/* Instancia */
var reloj = new Reloj(10, 30);
/* Resultado */
console.log('reloj ', reloj);
