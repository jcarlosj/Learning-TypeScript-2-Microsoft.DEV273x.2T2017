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
    return Animal;
}());
/* Definición de la clase Rinceronte heredando de la clase 'Padre' Animal */
var Rinoceronte = /** @class */ (function (_super) {
    __extends(Rinoceronte, _super);
    /* Constructor */
    function Rinoceronte() {
        return _super.call(this, 'Rinoceronte') || this;
    }
    return Rinoceronte;
}(Animal));
/* Definición de la clase Empleado */
var Empleado = /** @class */ (function () {
    /* Constructor */
    function Empleado(nombreDelEmpleado) {
        this.nombre = nombreDelEmpleado;
    }
    return Empleado;
}());
/* Instancias de cada una de las clases */
var animal = new Animal('Ardilla'), rinoceronte = new Rinoceronte(), empleado = new Empleado('Bernard');
/* Resultados */
console.group('Antes de asignar (animal = rinoceronte;)');
console.log('animal ', animal.nombre);
console.log('rinoceronte ', rinoceronte.nombre);
console.groupEnd();
animal = rinoceronte;
//animal = empleado /* ERROR: La el objeto 'Animal' no es compatible con el objeto 'Empleado' */
console.group('Después de asignar (animal = rinoceronte;)');
console.log('animal ', animal.nombre);
console.log('rinoceronte ', rinoceronte.nombre);
console.groupEnd();
