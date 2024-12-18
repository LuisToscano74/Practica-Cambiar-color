/* Obtener las referencias del párrafo y el botón */

const color = document.getElementById("color");
const button = document.getElementById("button");

// Manejar el Evento 

button.addEventListener("click", cambiarColor);

// Definir una función 

function colores() {
  // Código que se ejecuta 
  const opciones = "0123456789ABCDEF";
  let colorHex = "#"
  // Recorrer el String opciones 
  for (let i = 0 ; i < 6 ; i++) { 
  let indiceAleatorio = Math.floor(Math.random() * 16);
  colorHex += opciones[indiceAleatorio]; // #000000 
  }

  return colorHex;
}

function cambiarColor () {
  // Código que se ejecuta. 
 let colorAleatorio = colores();
 // Esto actualiza el texto 
 color.textContent = colorAleatorio;
 // Esto actualiza el color de fondo 
 document.body.style.backgroundColor = colorAleatorio;
}