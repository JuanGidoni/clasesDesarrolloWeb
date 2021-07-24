window.onload = function() {
 // Obtengo los valores del boton y del texto para manejar funcionalidades, etc...
 let button = document.getElementById('button');
 let text = document.getElementById('text');
// Declaro dos varaibles para hacer la diferencia
 let primero = parseInt(prompt('Ingresa un numero'));
 let segundo = prompt('Ingresa otro un numero');
// Inserto la pregunta en el parrafo TEXT
 text.innerText = "Es verdad que 1 = '1' ? ";
 
// Creo una funcion cuando se hace click.
 button.onclick = function(){
  // Pregunto la condicion de si Primero es igual a Segundo
  if(primero === segundo){
   // Agrego al texto la palabra SI, si se cumple la condicion
   text.append('Si');
  }else{
   // Agrego al texto la palabra NO, si se NO cumple la condicion
   text.append('No');
  }
 };
};