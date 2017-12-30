/* Types: Classes
 * Interfaces que extienden (heredan) a clases */

/* Definición de clase */
class Control {
  private estado : any;
}

/* Definición de una 'Interface' que extiende o hereda de una clase
   Cuando un tipo de 'Interface' extiende  de una tipo de clase, hereda
   los miembros (incluso los privados o protegidos) de la clase, no sus
   implementaciones. Lo que significa que cuando se crea una 'Interface'
   que amplica una clse con miembros privados o protegidos, este tipo de
   'Interface' solo puede ser implementado por esa clase o una subclase*/
interface ControlSeleccionable extends Control {
  select(): void;
}

/* Defición de clase (Subtipo de la clase Control) */
class Button extends Control {
  select() {}
}
/* Defición de clase  (Subtipo de la clase Control)*/
class TextBox extends Control {
  select() {}
}
/* Definición de clase
class Image {
  select() {}
}

class Location {
  select() {}
}
*/
