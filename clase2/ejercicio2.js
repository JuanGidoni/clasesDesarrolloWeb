// Crear un algoritmo que pregunte el nombre al usuario
// Sino ingresa nada, volver a preguntarle
// Si ingresa, decirle Bienvenido
window.onload = function() {
 // Obtengo los valores del boton y del texto para manejar funcionalidades, etc...
 let button = document.getElementById('button');
 let text = document.getElementById('text');
 // Declaro el nombre del usuario vacio.
let nombreDelUsuario;
// Creo la funcion de preguntarle el nombre. 
do {
 nombreDelUsuario = prompt('Ingresa tu nombre');
} while (!nombreDelUsuario);
// Agrego el mensaje de bienvenida.
text.append(`Bienvenido/a, ${nombreDelUsuario}`);

};