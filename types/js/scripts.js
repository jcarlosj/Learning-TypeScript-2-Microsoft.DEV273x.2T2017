/* Types: Interfaces */
// La función requiere como parámetro un objeto que tenga una propiedad de nombre 'rotulo' de tipo 'string'
function crearCuadrado(config) {
    /* Objeto estandar */
    var cuadrado = {
        color: 'white',
        area: 100
    };
    /* Valida si las propiedades de la interface existen */
    if (config.color) {
        cuadrado.color = config.color;
    }
    if (config.lado) {
        cuadrado.area = config.lado * config.lado;
    }
    return cuadrado; // Objeto
}
// Ejecuta la función y se le pasa un objeto con las características mínimas que exije la misma
var primerCuadrado = crearCuadrado({ color: 'rojo', lado: 7 }), segundoCuadrado = crearCuadrado({ lado: 25 }), tercerCuadrado = crearCuadrado({});
// Resultados
console.log('primerCuadrado ', primerCuadrado);
console.log('segundoCuadrado ', segundoCuadrado);
console.log('tercerCuadrado ', tercerCuadrado);
