/* basicTypesLab File */

window.onload = function() {
  let color         : string  = "green",
      squareSizeNum : number  = 100,
      squareSize    : string  = `${ squareSizeNum }px`,
      button        : Element = document .createElement( 'button' ),    // Agrega el elemento HTML 'button' a la variable 'button'
      div           : Element = document .createElement( 'div' );       // Agrega el elemento HTML 'div' a la variable 'div'

  button .textContent = "Change Color";                                 // Agrega el texto al elemento HTML 'button'

  /* Asignamos la función a una variable */
  let cambioColor: Function = ( elemento: Element, color: string ) : boolean => {
    ( <HTMLElement> elemento ) .style .backgroundColor = color;       // Agrega una 'Assertion' o (elemento as HTMLElement)

    return true;
  }

  /* Agregamos un ancho y altura al elemento div */
  ( <HTMLElement> div ) .style .width = squareSize;
  ( div as HTMLElement ) .style .height = squareSize;               // La Assertion funciona también si la declaramos así
  /* Agregamos un evento al botón */
  ( button as HTMLElement ) .onclick = ( evento ) => {
    cambioColor( div, color );
  }

  // Agrega los elementos HTML creados al cuerpo del documento
  document .body .appendChild(button);
  document .body .appendChild(div);

}
