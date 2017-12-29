/* Types: Classes
 * Podemos declarar estructuras de clases en TypeScript */
var Saludar = /** @class */ (function () {
    /* Consutructor */
    function Saludar(mensajeSaludo) {
        this.saludo = mensajeSaludo;
    }
    /* Metodos */
    Saludar.prototype.getSaludo = function () {
        return 'Hola, ' + this.saludo;
    };
    return Saludar;
}());
var unSaludo = new Saludar('Mundo!');
console.log('unSaludo ', unSaludo.getSaludo());
