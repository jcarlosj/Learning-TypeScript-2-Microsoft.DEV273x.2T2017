/* Types: Comparaciones Clases */

class Animal {
  pies : number;
  constructor( nombre: string, numeroPies: number ) {

  }
}
class Tamanio {
  pies : number;
  constructor( numeroPies: number ) {

  }
}

/* Comparación */
let animal: Animal,
    tamanio: Tamanio;

animal = tamanio;   // Ok
tamanio = animal;   // Ok

/* NOTA: Los miembros privados y protegidos de una clase afectan su compatibilidad.
         Cuando se comprueba la compatibilidad de una instancia de una clase, si el
         tipo de destino contiene un miembro privado y el tipo de fuente tambien debe
         contener un miembro privado igualmente para una instancia con miembros
         protegidos. ESTO PERMITE QUE UNA CLASE SEA COMPATIBLE CON SU SUPERCLASE,
         PERO NO CON LAS CLASES DE UNA JERARQUÍA DE HERENCIA DIFERENTE QUE DE LO
         CONTRARIO TIENE LA MISMA FORMA.*/
