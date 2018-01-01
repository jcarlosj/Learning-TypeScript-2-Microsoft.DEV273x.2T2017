/* basicTypesLab File */
window.onload = function () {
    var color = "green", squareSizeNum = 100, squareSize = squareSizeNum + "px", button = document.createElement('button'), // Agrega el elemento HTML 'button' a la variable 'button'
    div = document.createElement('div'); // Agrega el elemento HTML 'div' a la variable 'div'
    button.textContent = "Change Color"; // Agrega el texto al elemento HTML 'button'
    /* Asignamos la función a una variable */
    var cambioColor = function (elemento, color) {
        elemento.style.backgroundColor = color; // Agrega una 'Assertion' o (elemento as HTMLElement)
        return true;
    };
    /* Agregamos un ancho y altura al elemento div */
    div.style.width = squareSize;
    div.style.height = squareSize; // La Assertion funciona también si la declaramos así
    /* Agregamos un evento al botón */
    button.onclick = function (evento) {
        cambioColor(div, color);
    };
    // Agrega los elementos HTML creados al cuerpo del documento
    document.body.appendChild(button);
    document.body.appendChild(div);
};
