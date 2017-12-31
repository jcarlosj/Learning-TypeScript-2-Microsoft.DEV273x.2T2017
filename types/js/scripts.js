/* Types: Funciones y tipo de funciones */
/* Rest Parameters (Resto de parámetros)
   Se tratan como un número ilimitado de parámetros opcionales */
function construirNombre(primerNombre) {
    var elRestoDelNombre = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        elRestoDelNombre[_i - 1] = arguments[_i];
    }
    return primerNombre + ' ' + elRestoDelNombre.join(' ');
}
var chica = construirNombre('Elisa', 'Maria', 'Giraldo');
var chico = construirNombre('Juan', 'Carlos', 'Jiménez', 'Gutiérrez');
console.log('chica ', chica);
console.log('chico ', chico);
/* Otra Forma */
var construirNombreFn = construirNombre;
console.log('Como funcion ', construirNombreFn('Clara', 'Margarita', 'María', 'Rey', 'Plazas'));
