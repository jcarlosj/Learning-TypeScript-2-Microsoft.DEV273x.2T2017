/* Types: Readonly properties */
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
// Ejecuta la función y se le pasa a un objeto con las características mínimas que exije la misma
var primerCuadrado = crearCuadrado({ colour: 'blue', lado: 5 }); // ERROR: la propiedad 'colour' no existe en el tipo 'Cuadrado' (Interface).
console.log('primerCuadrado ', primerCuadrado);
