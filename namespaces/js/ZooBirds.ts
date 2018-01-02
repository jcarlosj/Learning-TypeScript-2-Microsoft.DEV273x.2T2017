/// <reference path='./ZooAnimals.ts' />

/* Crea el namespace */
namespace Zoo {

    /* Exportamos para poder acceder a la clase 'Animal' y crear instancias de objetos del tipo Reptil */
    export class Bird implements Animal {
      /* Atributos */
      tipo_piel = 'plumas';
      /* Métodos */
      esMamifero() : boolean {
        return false;
      }
    }

}

let lora = new Zoo .Bird();
console .log( 'Tipo de Piel ', lora .tipo_piel );
