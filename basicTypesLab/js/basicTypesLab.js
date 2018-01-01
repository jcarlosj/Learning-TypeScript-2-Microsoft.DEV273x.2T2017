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
/* Creamos un Array (Para unir todo lo anterior) */
var elementosHTML = [], squareSizeNum = 100, squareSize = squareSizeNum + "px";
/* Llenamos el Array con 4 Objetos con dos Elementos HTML cada uno de ellos */
for (var i = 0; i < 4; i++) {
    elementosHTML.push({
        'div': document.createElement('div'),
        'button': document.createElement('button') // Crea elemento HTML button
    });
}
//}
