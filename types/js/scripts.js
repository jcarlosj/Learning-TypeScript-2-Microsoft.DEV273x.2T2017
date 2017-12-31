/* Types: Contexto y Alcance (Scope) */
var baraja = {
    palos: ['corazones', 'diamantes', 'treboles', 'picas'],
    cartas: Array(52),
    /* Ahora la función especifica explicitamente que su llamada debe ser de tipo Baraja
       y sabe que espera ser llamado en un Objeto Baraja */
    crearSeleccionCarta: function () {
        var _this = this;
        return function () {
            var cartaElegida = Math.floor(Math.random() * 52), paloElegido = Math.floor(cartaElegida / 13), elegida = cartaElegida % 13;
            console.log(elegida);
            if (elegida == 0 || elegida == 1) {
                elegida = 'A';
            }
            if (elegida == 11) {
                elegida = 'J';
            }
            if (elegida == 12) {
                elegida = 'Q';
            }
            if (elegida == 13) {
                elegida = 'K';
            }
            return { palo: _this.palos[paloElegido], carta: elegida };
        };
    }
};
/* Genera la carta */
var carta_elegida = baraja.crearSeleccionCarta(), // Retorna una función
palo_elegido = carta_elegida(); // Hacemos llamada de sintáxis a la funcion devuelta
alert('Carta: ' + palo_elegido.carta + ' de ' + palo_elegido.palo);
