/* Types: Classes
 * Herencia */
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
var Animal = /** @class */ (function () {
    /* Constructor */
    function Animal(nombreDelAnimal) {
        this.nombre = nombreDelAnimal;
    }
    /* Métodos */
    Animal.prototype.mover = function (distanciaEnMetros) {
        if (distanciaEnMetros === void 0) { distanciaEnMetros = 0; }
        console.log(this.nombre + " se movi\u00F3 " + distanciaEnMetros + "mts");
    };
    return Animal;
}());
var Serpiente = /** @class */ (function (_super) {
    __extends(Serpiente, _super);
    /* Constructor */
    function Serpiente(nombre) {
        return _super.call(this, nombre) || this;
    }
    /* Métodos */
    Serpiente.prototype.mover = function (distanciaEnMetros) {
        if (distanciaEnMetros === void 0) { distanciaEnMetros = 5; }
        console.log('Arrastrandose ... ');
        _super.prototype.mover.call(this, distanciaEnMetros);
    };
    return Serpiente;
}(Animal));
var Caballo = /** @class */ (function (_super) {
    __extends(Caballo, _super);
    /* Constructor */
    function Caballo(nombre) {
        return _super.call(this, nombre) || this;
    }
    /* Métodos */
    Caballo.prototype.mover = function (distanciaEnMetros) {
        if (distanciaEnMetros === void 0) { distanciaEnMetros = 5; }
        console.log('Galopando ... ');
        _super.prototype.mover.call(this, distanciaEnMetros);
    };
    return Caballo;
}(Animal));
var sam = new Serpiente('Sammy la Serpiente Python'), tom = new Caballo('Palomo el caballo blanco de Bolivar');
sam.mover();
tom.mover(34);
