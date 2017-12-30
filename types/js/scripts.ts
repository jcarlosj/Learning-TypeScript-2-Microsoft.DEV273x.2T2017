/* Types: Classes
 * Herencia */

class Animal {
  /* Atributos */
  nombre: string;
  /* Constructor */
  public constructor( nombreDelAnimal : string ) {
    this .nombre = nombreDelAnimal;
  }
  /* Métodos */
  public mover( distanciaEnMetros : number = 0 ) {
    console .log( `${this .nombre} se movió ${distanciaEnMetros}mts` );
  }
}

class Serpiente extends Animal {
  /* Constructor */
  public constructor( nombre ) {
    super( nombre );
  }
  /* Métodos */
  public mover( distanciaEnMetros = 5 ) {
    console .log( 'Arrastrandose ... ' );
    super .mover( distanciaEnMetros );
  }
}

class Caballo extends Animal {
  /* Constructor */
  public constructor( nombre ) {
    super( nombre );
  }
  /* Métodos */
  public mover( distanciaEnMetros = 5 ) {
    console .log( 'Galopando ... ' );
    super .mover( distanciaEnMetros );
  }
}

let sam = new Serpiente( 'Sammy la Serpiente Python' ),
    tom : Animal = new Caballo( 'Palomo el caballo blanco de Bolivar' );

sam .mover();
tom .mover( 34 );    
