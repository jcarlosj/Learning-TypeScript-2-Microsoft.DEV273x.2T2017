/* Types: Classes
 * Podemos declarar estructuras de clases en TypeScript */
/* Definición de la clase sin 'Accessors' (Getters & Setters) */
var Empleado = /** @class */ (function () {
    function Empleado() {
    }
    return Empleado;
}());
var empleado = new Empleado();
empleado.nombre_completo = 'Jorge Robles';
if (empleado.nombre_completo) {
    console.log('Nombre: ', empleado.nombre_completo);
}
