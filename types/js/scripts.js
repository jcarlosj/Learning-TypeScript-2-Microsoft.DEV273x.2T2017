/* Types: Classes
 * Técnicas Avanzadas */
/* Contructor functions
 * Cuando se declara una clase en TS, en realidad está creando múltiples
 * declaraciones al mismo tiempo. El primero es el tipo de la instancia
 * de la clase */
var Saludar = /** @class */ (function () {
    function Saludar() {
    }
    /* Métodos */
    Saludar.prototype.darSaludo = function () {
        if (this.saludo) {
            return 'Hola, ' + this.saludo;
        }
        else {
            return Saludar.saludoEstandar;
        }
    };
    /* Atributo */
    Saludar.saludoEstandar = 'Qué más!';
    return Saludar;
}());
/* Instancia FORMA 1 */
var saludo1; // Declara una variable con el tipo de la misma Instancias
saludo1 = new Saludar(); // Instancia la clase en la variable del mismo tipo
console.log('saludo1 ', saludo1.darSaludo());
/*Crea variable que contiene la clase en sí (osea la función constructora) */
var unSaludo = Saludar; // typeof obtiene el tipo de clase (en lugar del tipo de instancia, con el que se obtendran todos los miembros estáticos de "Saludar")
unSaludo.saludoEstandar = "Que tal y entonces!";
var saludo2 = new unSaludo(); // Obtenemos acceso a todos los miembros no estáticos de la clase "Saludar"
console.log('saludo2 ', saludo2.darSaludo());
