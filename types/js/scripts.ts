/* Types: Classes
 * Técnicas Avanzadas */

 /* Usando una clase como 'Interface'
  * Una declaración de clase (2 ejemplos anteriores) crea 2 cosas
  * la primera: un tipo que representa instancias de clase y una función
  * de constructor. Debido a que las clases crean tipos puede usarlos en
  * los mismos lugares donde podría usar interfaces */

class Punto {
  coordenada_x : number;
  coordenada_y : number;
}

interface Punto3D extends Punto {
  coordenada_z: number;
}

let punto3d: Punto3D = { coordenada_x: 1, coordenada_y: 2, coordenada_z: 3 };
console .log( 'punto3d ', punto3d );
