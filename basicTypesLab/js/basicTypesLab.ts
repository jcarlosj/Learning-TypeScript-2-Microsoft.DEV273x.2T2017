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
    cambiarColor( color : number | string ) : boolean {   // Union Type: Que una variable funcione como uno o más tipos
      if( typeof( color ) === 'number' ) {
        return true;
      }
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
    static Colores = Colores;
    /* Constructor */
    constructor( div : Element ) {
      super( div );

      /* Asignamos los valores de alto y ancho del elemento div */
      ( this .div as HTMLElement ) .style .width = squareSize;
      ( this .div as HTMLElement ) .style .height = squareSize;
    }
    /* Método de cambio de color */
    cambiar( numero_color : number ) : boolean {
      /* Asignamos el color al fondo de nuestra varible stática que contiene una lista de colores (Enum) */
      ( this .div as HTMLElement ) .style .backgroundColor = Colores[ numero_color ];
      return true;
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
    let claseColor = new Color( elemento .div );

    elemento .button .textContent = 'Change Color';

    /* Evento del botón */
    ( elemento .button as HTMLElement ) .onclick = ( event ) => {
      claseColor .cambiar ( getRamdomIntInclusive( 0, 3 ) );         // Variable Enum
    }

    /* Desplegamos en el documento HTML */
    document .body .appendChild( elemento .button );
    document .body .appendChild( elemento .div );
  });

  /* Función para generar un número Aleatorio */
  let getRamdomIntInclusive: Function = ( min, max ) => {
    min = Math .ceil( min );
    max = Math .floor( max );

    return Math .floor( Math .random() * ( max - min + 1 ) ) + min;
  }

//}
