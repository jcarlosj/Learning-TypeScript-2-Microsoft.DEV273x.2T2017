/* Types: Classes
 * Técnicas Avanzadas */
/* Contructor functions
 * Cuando se declara una clase en TS, en realidad está creando múltiples
 * declaraciones al mismo tiempo. El primero es el tipo de la instancia
 * de la clase */
/* Función de constructor */
var Saludar = (function () {
    /* Constructor */
    function Saludar(mensajeSaludo) {
        this.saludo = mensajeSaludo;
    }
    /* Agregamos un método 'darSaludo' a la Funcion de Constructor 'Saludar' */
    Saludar.prototype.darSaludo = function () {
        return 'Hola, ' + this.saludo;
    };
    return Saludar;
})();
var saludar;
saludar = new Saludar('Mundo!'); // Creamos la Instancia de Funcion
console.log(saludar.darSaludo());
