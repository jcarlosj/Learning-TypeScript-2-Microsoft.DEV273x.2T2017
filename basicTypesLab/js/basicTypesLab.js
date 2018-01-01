/* basicTypesLab File */
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
    Colores[Colores["Verde"] = 0] = "Verde";
    Colores[Colores["Rojo"] = 1] = "Rojo";
    Colores[Colores["Azul"] = 2] = "Azul";
    Colores[Colores["Naranja"] = 3] = "Naranja";
})(Colores || (Colores = {}));
