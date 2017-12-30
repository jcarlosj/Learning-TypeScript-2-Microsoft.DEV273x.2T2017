/* Types: Inferencia de compatibilidad */
/* Interencia de tipos por el contenido de las variables */
var mensaje = 'Hola esta es una cadena de texto', // Infiere que es String
edad = 50, // Infiere que es number
unArregloDeNumeros = [1, 2, null];
/* Inferencia de Arserción */
var tipoSinDeclarar = 'Esta es otra cadena de texto';
console.log('# ', tipoSinDeclarar.length);
console.log('# ', tipoSinDeclarar.length);
/* Crea método aceptando Interfaces */
var cuadradoFn = function (cuadrado) {
    return cuadrado.nombre;
};
var cuadrado = {
    nombre: 'Un cuadrado',
    tamanio: 20
};
var executeFn = cuadradoFn(cuadrado);
/* Implementar una Interface que usa una clase */
var cuadradoClass = /** @class */ (function () {
    function cuadradoClass() {
        this.nombre = 'Un cuadrado';
        this.tamanio = 10;
    }
    return cuadradoClass;
}());
/**/
var cuadrado2;
var cuadradoFalso = {
    'tamanio': 'Una cadena',
    'nombre': 20
};
// cuadrado2 = cuadradoFalso;   // ERROR no se puede asignar 
