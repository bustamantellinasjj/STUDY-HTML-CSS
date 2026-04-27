// |||||||||||||||||||||||||||||||||||||||||
// SCRIPT.JS - Interactividad básica
// Se enlaza en index3.html antes de </body>
// |||||||||||||||||||||||||||||||||||||||||

// |||||||||||||||||||||||||||||||||||||||||||||||
// 1. MENSAJE DE BIENVENIDA
// Al hacer clic en el botón, muestra u oculta
// un párrafo de bienvenida en la sección Sobre mí
// |||||||||||||||||||||||||||||||||||||||||||||||

// Selecciona el botón y el párrafo por su id
const btnMensaje = document.getElementById('btn-mensaje');
const mensajeBienvenida = document.getElementById('mensaje-bienvenida');

// Verifica que los elementos existen antes de usarlos
if (btnMensaje && mensajeBienvenida) {

  // addEventListener: escucha el evento 'click' en el botón
  btnMensaje.addEventListener('click', function() {

    // Comprueba si el mensaje está oculto o visible
    if (mensajeBienvenida.style.display === 'none') {

      // Si está oculto: lo muestra y cambia el texto del botón
      mensajeBienvenida.style.display = 'block';
      btnMensaje.textContent = 'Ocultar mensaje';

    } else {

      // Si está visible: lo oculta y restaura el texto del botón
      mensajeBienvenida.style.display = 'none';
      btnMensaje.textContent = 'Mostrar mensaje de bienvenida';
    }
  });
}

// ||||||||||||||||||||||||||||||||||||||||||||
// 2. MOSTRAR / OCULTAR PROYECTOS
// Al hacer clic en el botón, muestra u oculta
// el grid de tarjetas de proyectos
// ||||||||||||||||||||||||||||||||||||||||||||

// Selecciona el botón y el grid de proyectos
const btnProyectos = document.getElementById('btn-proyectos');
const gridProyectos = document.querySelector('.grid-proyectos');

// Verifica que los elementos existen
if (btnProyectos && gridProyectos) {

  btnProyectos.addEventListener('click', function() {

    // Comprueba si el grid está visible u oculto
    if (gridProyectos.style.display === 'none') {

      // Si está oculto: lo muestra
      gridProyectos.style.display = 'grid';
      btnProyectos.textContent = 'Ocultar proyectos';

    } else {

      // Si está visible: lo oculta
      gridProyectos.style.display = 'none';
      btnProyectos.textContent = 'Mostrar proyectos';
    }
  });
}
