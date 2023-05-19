document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll("nav ul li a");
  
    // Agrega eventos para cambiar el color al colocar el puntero del mouse
    menuLinks.forEach(function(link) {
      link.addEventListener("mouseover", function() {
        this.style.color = "green";
      });
  
      link.addEventListener("mouseout", function() {
        this.style.color = "";
      });
  
      // Agrega evento para cambiar el color al hacer clic
      link.addEventListener("click", function(event) {
        event.preventDefault();
        this.style.color = "red";
      });
    });
  });  