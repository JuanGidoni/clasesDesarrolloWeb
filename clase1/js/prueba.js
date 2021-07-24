var contenido = document.getElementById('prueba');

// Declarar 3 variables: nombre, apellido, edad.

var nombre = prompt("Cual es tu nombre?");
// nombre pasa a tener el valor solicitado al usuario con prompt.
console.log(nombre)

var apellido = prompt("Cual es tu apellido?");
// apellido pasa a tener el valor solicitado al usuario con prompt.
console.log(apellido)

var edad = prompt("Cual es tu edad?");
// edad pasa a tener el valor solicitado al usuario con prompt.
console.log(edad)

// Establezco dentro del HTML (<div class="prueba"></div>) el string con los datos.
contenido.innerHTML = `Bienvenido, ${nombre} ${apellido} (${edad}), a mi pagina web.`;

// Vamos a consultarle al usuario por dos numeros.
var primerNumero = Number(prompt("Ingrese un numero"));
var segundoNumero = Number(prompt("Ingrese otro numero"));

// Vamos a sumar esos dos numeros en una variable resultado
var resultado = primerNumero + segundoNumero;

// Crearemos un elemento P (html) y le colocaremos el resultado dentro.
var resultadoCaja = document.createElement("p");
resultadoCaja.innerHTML = resultado;

// Ingresaremos el elemento P dentro del div del contenido (<div class="prueba"></div>)
contenido.appendChild(resultadoCaja);