/// <reference path='./ZooAnimals.ts' />

/* Crea el namespace */
namespace Zoo {

    /* Exportamos para poder acceder a la clase 'Animal' y crear instancias de objetos del tipo Reptil */
    export class Reptil implements Animal {
      /* Atributos */
      tipo_piel = 'escamas';
      /* Métodos */
      esMamifero() : boolean {
        return false;
      }
    }

}

let serpiente = new Zoo .Reptil();
console .log( 'Tipo de Piel ', serpiente .tipo_piel );
