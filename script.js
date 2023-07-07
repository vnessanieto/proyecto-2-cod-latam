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
