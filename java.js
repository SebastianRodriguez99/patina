
  const boton = document.getElementById('boton__Abrir');
  const sonido = document.getElementById('sonido__patito');

  boton.addEventListener('click', function(event) {
    event.preventDefault(); // evita que se recargue la página si el anclaje tiene href
    sonido.play();
    // Podés poner también otras acciones acá si querés
  setTimeout(() => {
      window.location.href = boton.href;
    }, 500);
    //hace que despues de sonar redirija (luego de 500 mileseungos) al boton href"pagina puesta"
  });
