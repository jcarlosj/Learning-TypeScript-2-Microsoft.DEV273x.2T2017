/* Types: Contexto y Alcance (Scope) */
var baraja = {
    palos: ['corazones', 'diamantes', 'treboles', 'picas'],
    cartas: Array(52),
    crearSeleccionCarta: function () {
        var _this = this;
        return function () {
            var cartaElegida = Math.floor(Math.random() * 52), paloElegido = Math.floor(cartaElegida / 13);
            return { palo: _this.palos[paloElegido], carta: cartaElegida % 13 };
        };
    }
};
/* Genera la carta */
var carta_elegida = baraja.crearSeleccionCarta(), // Retorna una función
palo_elegido = carta_elegida(); // Hacemos llamada de sintáxis a la funcion devuelta
alert('Carta: ' + palo_elegido.carta + ' de ' + palo_elegido.palo);
