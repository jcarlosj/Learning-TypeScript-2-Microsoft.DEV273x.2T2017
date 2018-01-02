/* TRANSPILACION de varios archivos
 * tsc --outFile scripts.js ZooAnimals.ts ZooWild.ts ZooBirds.ts */
/// <reference path='./ZooAnimals.ts' />
/* Crea el namespace */
var Zoo;
(function (Zoo) {
    /* Exportamos para poder acceder a la clase 'Animal' y crear instancias de objetos del tipo Reptil */
    var Reptil = /** @class */ (function () {
        function Reptil() {
            /* Atributos */
            this.tipo_piel = 'escamas';
        }
        /* Métodos */
        Reptil.prototype.esMamifero = function () {
            return false;
        };
        return Reptil;
    }());
    Zoo.Reptil = Reptil;
})(Zoo || (Zoo = {}));
var serpiente = new Zoo.Reptil();
console.log('Tipo de Piel ', serpiente.tipo_piel);
/// <reference path='./ZooAnimals.ts' />
/* Crea el namespace */
var Zoo;
(function (Zoo) {
    /* Exportamos para poder acceder a la clase 'Animal' y crear instancias de objetos del tipo Reptil */
    var Bird = /** @class */ (function () {
        function Bird() {
            /* Atributos */
            this.tipo_piel = 'plumas';
        }
        /* Métodos */
        Bird.prototype.esMamifero = function () {
            return false;
        };
        return Bird;
    }());
    Zoo.Bird = Bird;
})(Zoo || (Zoo = {}));
var lora = new Zoo.Bird();
console.log('Tipo de Piel ', lora.tipo_piel);
