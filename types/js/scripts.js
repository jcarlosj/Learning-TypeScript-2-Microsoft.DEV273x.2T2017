/* Types: Classes
 * Podemos declarar estructuras de clases en TypeScript */
/* Definición de la clase sin 'Accessors' (Getters & Setters) */
let codigoSecreto = '12345';
class Empleado {
    /* Métodos 'Accessors' (Accesorios) */
    get nombreCompleto() {
        return this._nombrecompleto;
    }
    set nombreCompleto(nuevonombre) {
        if (codigoSecreto && codigoSecreto == '12345') {
            this._nombrecompleto = nuevonombre;
        }
        else {
            console.log('ERROR: No esta autorizado a realizar cambios');
        }
    }
}
let empleado = new Empleado();
empleado.nombreCompleto = 'Jorge Robles';
if (empleado.nombreCompleto) {
    console.log('Nombre: ', empleado.nombreCompleto);
}
