/* Types: Contexto y Alcance (Scope) */

let baraja = {
  palos: [ 'corazones', 'diamantes', 'treboles', 'picas' ],
  cartas: Array( 52 ),
  crearSeleccionCarta: function () {

    return () => {    // Ahora nos permite capturar el valor de retorno y devolver este a cambio de la función misma
      let cartaElegida = Math .floor( Math .random() * 52 ),
          paloElegido = Math .floor( cartaElegida / 13 ),
          elegida : any = cartaElegida % 13;

          console .log( elegida );

          if( elegida == 0 || elegida == 1 ) {
            elegida = 'A';
          }
          if( elegida == 11 ) {
            elegida = 'J';
          }
          if( elegida == 12 ) {
            elegida = 'Q';
          }
          if( elegida == 13 ) {
            elegida = 'K';
          }

      return { palo: this .palos[ paloElegido ], carta: elegida };
    }
  }
}

/* Genera la carta */
let carta_elegida = baraja .crearSeleccionCarta(),    // Retorna una función
    palo_elegido = carta_elegida();                   // Hacemos llamada de sintáxis a la funcion devuelta

alert( 'Carta: ' + palo_elegido .carta + ' de ' + palo_elegido .palo );
