/* Types: Comparaciones Enums (Enumeraciones) */
var Estado;
(function (Estado) {
    Estado[Estado["Esperando"] = 0] = "Esperando";
    Estado[Estado["Listo"] = 1] = "Listo";
})(Estado || (Estado = {}));
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Azul"] = 1] = "Azul";
    Color[Color["Verde"] = 2] = "Verde";
})(Color || (Color = {}));
var ColoresPrimarios;
(function (ColoresPrimarios) {
    ColoresPrimarios[ColoresPrimarios["Amarillo"] = 0] = "Amarillo";
    ColoresPrimarios[ColoresPrimarios["Azul"] = 1] = "Azul";
    ColoresPrimarios[ColoresPrimarios["Rojo"] = 2] = "Rojo";
})(ColoresPrimarios || (ColoresPrimarios = {}));
var estado = Estado.Esperando;
console.log('estado ', estado);
console.log('color ', Color[1]);
//estado = Color.Verde                  // ERROR
var color = Color.Verde;
//color = ColoresPrimarios .Amarillo;   // ERROR
