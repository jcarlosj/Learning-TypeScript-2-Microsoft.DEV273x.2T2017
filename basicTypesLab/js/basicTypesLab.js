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
