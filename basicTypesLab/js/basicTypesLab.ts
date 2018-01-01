/* basicTypesLab File */

/* Crea clase */
class Fondo {
  /* Atributos */
  div : Element;
  /* Constructor */
  constructor( div : Element ) {
    this .div = div;
  }
  cambiarColor( color : string ) : boolean {
    ( this .div as HTMLElement ) .style .backgroundColor = color;
    return true;
  }

}

/* Crea Interface */
interface ConjuntoElementos {
  'div'    : Element,
  'button' : Element
}

/* Crea Conjunto de Elementos Enum */
enum Colores {
  Verde,
  Rojo,
  Azul,
  Naranja
}
