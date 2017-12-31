/* Types: Contexto y Alcance (Scope) */

/* this PARAMETER */

interface Carta {
  palo: string;
  carta: number;
}

interface Baraja {
  palos: string[];
  cartas: number[];
  crearSeleccionCarta( this: Baraja ) : () => Carta;    // Llamado de la funcion crearSeleccionCarta desde el Objeto Baraja
                                                        // --noImplicitThis no causará ningún error
}

let baraja: Baraja = {
  palos: [ 'corazones', 'diamantes', 'treboles', 'picas' ],
  cartas: Array( 52 ),
  /* Ahora la función especifica explicitamente que su llamada debe ser de tipo Baraja
     y sabe que espera ser llamado en un Objeto Baraja */
  crearSeleccionCarta: function ( this: Baraja ) {

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
