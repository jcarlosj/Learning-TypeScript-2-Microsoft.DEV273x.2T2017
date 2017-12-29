/* Types: Classes
 * Técnicas Avanzadas */
/* Contructor functions
 * Cuando se declara una clase en TS, en realidad está creando múltiples
 * declaraciones al mismo tiempo. El primero es el tipo de la instancia
 * de la clase */
var Saludar = /** @class */ (function () {
    /* Constructor */
    function Saludar(mensajeSaludo) {
        this.saludo = mensajeSaludo;
    }
    /* Métodos */
    Saludar.prototype.darSaludo = function () {
        return 'Hola, ' + this.saludo;
    };
    return Saludar;
}());
var saludar; // Creamos una variable con el tipo de la Instancia que vamos a crear
saludar = new Saludar('Mundo!'); // Creamos la Instancia
console.log(saludar.darSaludo());
