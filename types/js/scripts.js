/* Types: Classes
 * Podemos declarar estructuras de clases en TypeScript */
/* Definición de la clase con propiedades estáticas */
var Grilla = /** @class */ (function () {
    /* Constructor */
    function Grilla(escala) {
        this.escala = escala;
        this.escala = escala;
    }
    /* Métodos */
    Grilla.prototype.calcularDistanciaDesdeOrigen = function (point) {
        var distanciaEnX = (point.x - Grilla.origen.x), distanciaEnY = (point.y - Grilla.origen.y);
        return Math.sqrt(distanciaEnX * distanciaEnX + distanciaEnY * distanciaEnY) / this.escala;
    };
    /* Atributos Estáticos */
    Grilla.origen = { x: 0, y: 0 };
    return Grilla;
}());
/* Instancias*/
var grilla1 = new Grilla(1.0), grilla2 = new Grilla(5.0);
/* Resultados */
console.group('Propiedades estáticas');
console.log('Grilla 1: ', grilla1.calcularDistanciaDesdeOrigen({ x: 10, y: 10 }));
console.log('Grilla 2: ', grilla2.calcularDistanciaDesdeOrigen({ x: 10, y: 10 }));
console.groupEnd();
