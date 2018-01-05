//import { algunaVariable, algunaFuncion } from './module1';
//import algunaInterface from './module1';
//import { otroMetodo } from './module1';
System.register(["./module1"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var module1_1, module1_2, algunaInstanciaDeClase, copia, laInstanciaLista;
    return {
        setters: [
            function (module1_1_1) {
                module1_1 = module1_1_1;
                module1_2 = module1_1_1;
            }
        ],
        execute: function () {//import { algunaVariable, algunaFuncion } from './module1';
            //import algunaInterface from './module1';
            //import { otroMetodo } from './module1';
            /* Instanciando la clase AlgunaClase */
            algunaInstanciaDeClase = new module1_1.AlgunaClase;
            copia = algunaInstanciaDeClase.algunaVariable;
            /* Usando la instancia de OtraClase */
            laInstanciaLista = module1_2["default"];
        }
    };
});
