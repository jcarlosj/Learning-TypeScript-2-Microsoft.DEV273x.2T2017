/* basicTypesLab File */

window.onload = function() {
  let color         : string  = "green",
      squareSizeNum : number  = 100,
      squareSize    : string  = `${ squareSizeNum }px`,
      button        : Element = document .createElement( 'button' ),    // Agrega el elemento HTML 'button' a la variable 'button'
      div           : Element = document .createElement( 'div' );       // Agrega el elemento HTML 'div' a la variable 'div'

  button .textContent = "Change Color";                                 // Agrega el texto al elemento HTML 'button'
  // Agrega los elementos HTML creados al cuerpo del documento
  document .body .appendChild(button);
  document .body .appendChild(div);
}
