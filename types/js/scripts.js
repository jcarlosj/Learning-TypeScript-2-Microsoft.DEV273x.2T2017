/* Types: Classes
 * Técnicas Avanzadas */
/* Usando una clase como 'Interface'
 * Una declaración de clase (2 ejemplos anteriores) crea 2 cosas
 * la primera: un tipo que representa instancias de clase y una función
 * de constructor. Debido a que las clases crean tipos puede usarlos en
 * los mismos lugares donde podría usar interfaces */
var Punto = /** @class */ (function () {
    function Punto() {
    }
    return Punto;
}());
var punto3d = { coordenada_x: 1, coordenada_y: 2, coordenada_z: 3 };
console.log('punto3d ', punto3d);
