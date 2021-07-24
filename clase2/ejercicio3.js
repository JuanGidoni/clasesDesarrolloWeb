window.onload = function () {
 // Obtengo los valores del boton y del texto para manejar funcionalidades, etc...
 let button = document.getElementById('button');
 let helados = document.getElementById('helados');
 let toppings = document.getElementById('toppings');
 let total = document.getElementById('total');

 // Declaro los valores de los helados en un array con un objeto para manejar
 // propiedades y valores.

 let valoresHelados = [{
  name: "Helado de chocolate y frutilla (2 bochas)",
  value: 100
 }, {
  name: "Helado de vainilla y dulce de leche (2 bochas)",
  value: 80
 }, ];

 // Declaro los valores de los toppings en un array con un objeto para manejar
 // propiedades y valores.

 let valoresToppings = [{
   name: "Sin Topping",
   value: 0
  },
  {
   name: "Topping Oreo",
   value: 50
  },
  {
   name: "Topping KitKat",
   value: 100
  },
  {
   name: "Topping Brownie",
   value: 75
  },
  {
   name: "Topping Ferrero Roger Oreo",
   value: 95
  },
 ];
 
 // Utilizo el metodo FOR, para ingresar las opciones del select "helados" en html
 for (let i = 0; i < valoresHelados.length; i++) {
  // Dentro del for, creo un elemnto de option y le doy sus valores, al final, lo ingreso.
  let options = document.createElement('option');
  options.value = valoresHelados[i].value;
  options.innerText = valoresHelados[i].name;
  helados.appendChild(options)
 }

 // Utilizo el metodo FOR, para ingresar las opciones del select "toppings" en html
 for (let i = 0; i < valoresToppings.length; i++) {
  // Dentro del for, creo un elemnto de option y le doy sus valores, al final, lo ingreso.
  let options = document.createElement('option');
  options.value = valoresToppings[i].value;
  options.innerText = valoresToppings[i].name;
  toppings.appendChild(options)
 }
 // Ejecuto una funcion al hacer click en el boton.
 button.onclick = (e) => {
  e.preventDefault(); // Previene la ejecucion por defecto del formulario.
  // Sumo los valores del select de cada uno del formulario y lo coloco en el <p>TOTAL</p>
  let precioFinal = parseInt(helados.value) + parseInt(toppings.value);
  total.innerHTML = precioFinal;
 }
};