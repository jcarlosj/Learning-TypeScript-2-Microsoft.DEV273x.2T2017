/* basicTypesLab File */

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
