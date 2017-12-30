/* Types: Comparaciones Clases */
var Animal = /** @class */ (function () {
    function Animal(nombre, numeroPies) {
    }
    return Animal;
}());
var Tamanio = /** @class */ (function () {
    function Tamanio(numeroPies) {
    }
    return Tamanio;
}());
/* Comparación */
var animal, tamanio;
animal = tamanio; // Ok
tamanio = animal; // Ok
/* NOTA: Los miembros privados y protegidos de una clase afectan su compatibilidad.
         Cuando se comprueba la compatibilidad de una instancia de una clase, si el
         tipo de destino contiene un miembro privado y el tipo de fuente tambien debe
         contener un miembro privado igualmente para una instancia con miembros
         protegidos. ESTO PERMITE QUE UNA CLASE SEA COMPATIBLE CON SU SUPERCLASE,
         PERO NO CON LAS CLASES DE UNA JERARQUÍA DE HERENCIA DIFERENTE QUE DE LO
         CONTRARIO TIENE LA MISMA FORMA.*/
