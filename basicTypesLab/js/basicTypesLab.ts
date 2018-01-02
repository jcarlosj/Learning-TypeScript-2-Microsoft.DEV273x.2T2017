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

  /* Crear clase */
  class Color extends Fondo {
    /* Atributos */
    static colores = Colores;
    /* Constructor */
    constructor( div : Element ) {
      super( div );

      /* Asignamos los valores de alto y ancho del elemento div */
      ( this .div as HTMLElement ) .style .width = squareSize;
      ( this .div as HTMLElement ) .style .height = squareSize;
    }
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

  /* Ahora usamos el mapeo en ES6 para asignar valores a cada uno de los elementos creados anteriormente*/
  elementosHTML .map( ( elemento, indice ) => {
    /* Hacemos una instancia de Fondo */
    let claseFondo = new Fondo( elemento .div );

    elemento .button .textContent = 'Change Color';

    /* Evento del botón */
    ( elemento .button as HTMLElement ) .onclick = ( event ) => {
      claseFondo .cambiarColor ( Colores[ indice ] );         // Variable Enum
    }

    /* Desplegamos en el documento HTML */
    document .body .appendChild( elemento .button );
    document .body .appendChild( elemento .div );
  });

//}
