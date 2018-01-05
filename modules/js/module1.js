/* Módulo 1 */
System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /* Exportar por defecto
     * Un módulo no puede tener múltiples exportaciones predeterminadas */
    //export default algunaVariable;
    //export default algunaFuncion;
    //export default algunaInterface;
    /* Exportar directamente */
    function otroMetodo() {
    }
    exports_1("otroMetodo", otroMetodo);
    var algunaVariable, algunaFuncion, OtraClase, AlgunaClase;
    return {
        setters: [],
        execute: function () {/* Módulo 1 */
            /* Crea una variable */
            algunaVariable = 'Hola desde el Módulo 1';
            /* Crea una Funcion */
            algunaFuncion = function () {
            };
            OtraClase = /** @class */ (function () {
                function OtraClase() {
                }
                return OtraClase;
            }());
            AlgunaClase = /** @class */ (function () {
                function AlgunaClase() {
                    this.algunaVariable = 'Hola desde AlgunaClase (Módulo 1)';
                }
                return AlgunaClase;
            }());
            exports_1("AlgunaClase", AlgunaClase);
            exports_1("default", new OtraClase);
        }
    };
});
