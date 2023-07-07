const CV = document.getElementById("CV");

CV.addEventListener("click", function() {
  
  console.log("¡Botón clickeado!");
});


//

const botonPortafolio = document.getElementById("Portafolio");

botonPortafolio.addEventListener("click", function() {
  alert("¡Click!");
});


const menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(function(item) {
 
  item.addEventListener('click', function() {

    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });

    this.classList.add('active');
  });
});


const iconos = document.querySelectorAll('.Contacto a i');

i.forEach(icono => {
  i.addEventListener('click', () => {
   
    console.log('Haz hecho clic en:', i.textContent);
  });
});

console.log("¡Hola mundo!")
let num1 = 50;
let num2 = 10;
let saludo = "¡Hola!";
let nombreCurso = "Código LATAM";

let resultadoSuma = num1 + num2;
let resultadoResta = num1 - num2;
let resultadoMultiplicacion = num1 * num2

console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.log(saludo + "Esto es" + nombreCurso);