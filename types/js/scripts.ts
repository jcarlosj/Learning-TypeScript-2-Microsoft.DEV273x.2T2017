/* Types: Contexto y Alcance (Scope) */

let baraja = {
  palos: [ 'corazones', 'diamantes', 'treboles', 'picas' ],
  cartas: Array( 52 ),
  crearSeleccionCarta: function () {

    return () => {    // Ahora nos permite capturar el valor de retorno y devolver este a cambio de la función misma
      let cartaElegida = Math .floor( Math .random() * 52 ),
          paloElegido = Math .floor( cartaElegida / 13 );

      return { palo: this .palos[ paloElegido ], carta: cartaElegida % 13 };
    }
  }
}

/* Genera la carta */
let carta_elegida = baraja .crearSeleccionCarta(),    // Retorna una función
    palo_elegido = carta_elegida();                   // Hacemos llamada de sintáxis a la funcion devuelta

alert( 'Carta: ' + palo_elegido .carta + ' de ' + palo_elegido .palo );
