/* Types: Classes
 * Podemos declarar estructuras de clases en TypeScript */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Definición de la clase Animal */
var Animal = /** @class */ (function () {
    /* Constructor */
    function Animal(nombreDelAnimal) {
        this.nombre = nombreDelAnimal;
    }
    /* Métodos */
    Animal.prototype.seMueve = function (distancia) {
        console.log(this.nombre + " se ha movido " + distancia + "mts");
    };
    return Animal;
}());
/* Definición de la clase Rinceronte heredando de la clase 'Padre' Animal */
var Rinoceronte = /** @class */ (function (_super) {
    __extends(Rinoceronte, _super);
    /* Constructor */
    function Rinoceronte() {
        return _super.call(this, 'Rinoceronte') || this;
    }
    /* Métodos */
    Rinoceronte.prototype.camina = function (distancia) {
        console.log(this.nombre + " se ha caminado " + distancia + "mts");
    };
    return Rinoceronte;
}(Animal));
/* Instancias de cada una de las clases */
var animal = new Animal('Ardilla'), rinoceronte = new Rinoceronte();
/* Resultados */
console.group('Modificadores (protected)');
animal.seMueve(15);
rinoceronte.camina(2);
console.groupEnd();
