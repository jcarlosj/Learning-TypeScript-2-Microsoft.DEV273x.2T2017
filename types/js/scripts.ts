/* Types: Comparaciones Enums (Enumeraciones) */

enum Estado {
  Esperando,
  Listo
}

enum Color {
  Rojo,
  Azul,
  Verde
}

enum ColoresPrimarios {
  Amarillo,
  Azul,
  Rojo
}

let estado = Estado .Esperando;
console .log( 'estado ', estado );
console .log( 'color ', Color[ 1 ]);

//estado = Color.Verde                  // ERROR
let color = Color .Verde;
//color = ColoresPrimarios .Amarillo;   // ERROR
