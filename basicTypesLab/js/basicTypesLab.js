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
/* basicTypesLab File */
//window.onload = function () {    /* A cambio de llamar el JS en el final del body */
/* Crea clase */
var Fondo = /** @class */ (function () {
    /* Constructor */
    function Fondo(div) {
        this.div = div;
    }
    Fondo.prototype.cambiarColor = function (color) {
        this.div.style.backgroundColor = color;
        return true;
    };
    return Fondo;
}());
/* Crea Conjunto de Elementos Enum */
var Colores;
(function (Colores) {
    Colores[Colores["Green"] = 0] = "Green";
    Colores[Colores["Red"] = 1] = "Red";
    Colores[Colores["Blue"] = 2] = "Blue";
    Colores[Colores["Orange"] = 3] = "Orange";
})(Colores || (Colores = {}));
/* Crear clase */
var Color = /** @class */ (function (_super) {
    __extends(Color, _super);
    /* Constructor */
    function Color(div) {
        var _this = _super.call(this, div) || this;
        /* Asignamos los valores de alto y ancho del elemento div */
        _this.div.style.width = squareSize;
        _this.div.style.height = squareSize;
        return _this;
    }
    /* Atributos */
    Color.colores = Colores;
    return Color;
}(Fondo));
/* Creamos un Array (Para unir todo lo anterior) */
var elementosHTML = [], squareSizeNum = 100, squareSize = squareSizeNum + "px";
/* Llenamos el Array con 4 Objetos con dos Elementos HTML cada uno de ellos */
for (var i = 0; i < 4; i++) {
    elementosHTML.push({
        'div': document.createElement('div'),
        'button': document.createElement('button') // Crea elemento HTML button
    });
}
/* Ahora usamos el mapeo en ES6 para asignar valores a cada uno de los elementos creados anteriormente*/
elementosHTML.map(function (elemento, indice) {
    /* Hacemos una instancia de Fondo */
    var claseFondo = new Fondo(elemento.div);
    elemento.button.textContent = 'Change Color';
    /* Evento del botón */
    elemento.button.onclick = function (event) {
        claseFondo.cambiarColor(Colores[indice]); // Variable Enum
    };
    /* Desplegamos en el documento HTML */
    document.body.appendChild(elemento.button);
    document.body.appendChild(elemento.div);
});
//}
