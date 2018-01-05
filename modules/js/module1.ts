/* Módulo 1 */

/* Crea una variable */
let algunaVariable : string = 'Hola desde el Módulo 1';

/* Crea una Funcion */
let algunaFuncion = () => {

}

/* Crea 'Interface' */
interface algunaInterface {

}
class OtraClase {

}

/* Exportar por defecto
 * Un módulo no puede tener múltiples exportaciones predeterminadas */
//export default algunaVariable;
//export default algunaFuncion;
//export default algunaInterface;
/* Exportar directamente */
export function otroMetodo() {

}
export class AlgunaClase {
  algunaVariable : string = 'Hola desde AlgunaClase (Módulo 1)';
}
/* Exportando una instancia de clase (Objeto) */
export default new OtraClase;
