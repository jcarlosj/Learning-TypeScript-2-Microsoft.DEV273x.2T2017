/* basicTypesLab File */
//window.onload = function () {    /* A cambio de llamar el JS en el final del body */
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
    Green,
    Red,
    Blue,
    Orange
  }

  /* Creamos un Array (Para unir todo lo anterior) */
  let elementosHTML : Array<ConjuntoElementos> = [],
      squareSizeNum : number = 100,
      squareSize : string = `${ squareSizeNum }px`;

  /* Llenamos el Array con 4 Objetos con dos Elementos HTML cada uno de ellos */
  for( let i: number = 0; i < 4; i++ ) {
    elementosHTML .push({
      'div'    : document .createElement( 'div' ),      // Crea elemento HTML div
      'button' : document .createElement( 'button' )    // Crea elemento HTML button
    });
  }


//}
