/* Crea el namespace */
namespace Zoo {
    /* Crea Interface */
    export interface Animal {
      /* Atributos */
      tipo_piel : string;
      /* Métodos */
      esMamifero() : boolean;
    }

}

/* TRANSPILACION de varios archivos
 * tsc --outFile scripts.js ZooAnimals.ts ZooWild.ts ZooBirds.ts */
