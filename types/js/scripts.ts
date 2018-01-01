/* Types: Overloads (Sobrecargas) */

let palos = [ 'corazones', 'diamantes', 'treboles', 'picas' ];

function elegirCarta( x ) : any {
  /* Verifica que estamos trabajando con un Objeto Matriz, si cumple
   * nos dará el mazo para elegir una carta */
   if( typeof x == 'object' ) {
     let cartaElegida = Math .floor( Math .random() * x.length );
     return cartaElegida;
   }
   else if( typeof x == 'number' ) {
     /* De lo contrario, simplemente déjelos elegir la carta */
     let paloElegido = Math .floor( x / 13 );
     return { palo: palos[ paloElegido ], carta: x % 13 };
   }

}

/* Objeto con las cartas disponibles para elegir */
let miBaraja = [
  { palo: 'diamantes', carta: 2 },
  { palo: 'picas', carta: 10 },
  { palo: 'corazones', carta: 4 }
];

/* Selecciona las cartas siempre que se le pase un objeto con las cartas dispobibles */
let primeraCartaElegida = miBaraja[ elegirCarta( miBaraja ) ];
alert( 'Carta ' + primeraCartaElegida .carta + ' de ' + primeraCartaElegida .palo );

/* Selecciona de todas las cartas existentes en un Naipe siempre que se le pase un valor numérico */
let segundaCartaElegida = elegirCarta( 15 );
alert( 'Carta ' + segundaCartaElegida .carta + ' de ' + segundaCartaElegida .palo );
