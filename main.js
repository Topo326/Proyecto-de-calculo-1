// Variables de estado
defineGame();

function defineGame() {
  window.nivel = 0;
  window.preguntaActual = 0;
  window.vidas = 2;
  window.preguntasCorrectas = 0;
  window.juegoTerminado = false;
  renderUI();
  mostrarPregunta();
}

function renderUI() {
  // Vidas
  const vidasDiv = document.getElementById('vidas');
  vidasDiv.innerHTML = '❤️'.repeat(window.vidas) + '🖤'.repeat(2 - window.vidas);
  // Progreso
  const progresoDiv = document.getElementById('progreso');
  progresoDiv.innerHTML = '<div id="progreso-bar"></div>';
  const bar = document.getElementById('progreso-bar');
  bar.style.width = ((window.preguntaActual) / preguntas[window.nivel].length * 100) + '%'; // Ajuste dinámico
  // Mostrar nivel actual
  document.querySelector('header h1').innerText = 'La Búsqueda del Ratón con Jeffry y Locki - Nivel ' + (window.nivel + 1);
}

// main.js (versión optimizada)
function mostrarPregunta() {
  if (window.juegoTerminado) return;

  const preguntaObj = preguntas[window.nivel][window.preguntaActual];
  const preguntaDiv = document.getElementById('pregunta');
  const opcionesDiv = document.getElementById('opciones');

  // Resetear contenedores con animación
  preguntaDiv.style.opacity = '0';
  opcionesDiv.style.opacity = '0';

  setTimeout(() => {
    // Mostrar pregunta TEXTUAL (sin procesar MathJax si no es necesario)
    preguntaDiv.textContent = preguntaObj.texto; // Usamos textContent para evitar HTML no deseado
    
    // Generar opciones (texto plano)
    opcionesDiv.innerHTML = ''; // Limpiar primero
    preguntaObj.opciones.forEach((opcion, index) => {
      const boton = document.createElement('button');
      boton.className = 'opcion';
      boton.textContent = opcion; // Texto directo, sin HTML
      boton.onclick = () => responder(index);
      opcionesDiv.appendChild(boton);
    });

    // Mostrar con animación
    preguntaDiv.style.opacity = '1';
    opcionesDiv.style.opacity = '1';
  }, 300);
}

function responder(idx) {
  if (window.juegoTerminado) return;
  const preguntaObj = preguntas[window.nivel][window.preguntaActual];
  const feedbackDiv = document.getElementById('feedback');
  if (idx === preguntaObj.correcta) {
    window.preguntasCorrectas++;
    feedbackDiv.innerText = '¡El ratón está cerca!';
    reproducirSonido('acierto');
    animarPersonaje('loki', 'feliz');
    setTimeout(() => {
      siguientePregunta();
    }, 900);
  } else {
    window.vidas--;
    feedbackDiv.innerText = '¡Loki olfatea el error!';
    reproducirSonido('error');
    animarPersonaje('loki', 'triste');
    renderUI();
    if (window.vidas <= 0) {
      setTimeout(() => perderVidaNivel(), 1200);
    }
  }
}

function siguientePregunta() {
  window.preguntaActual++;
  renderUI();
  if (window.preguntaActual >= preguntas[window.nivel].length) { // Ajuste dinámico según el número de preguntas por nivel
    if (window.nivel === preguntas.length - 1) { // Verifica si es el último nivel
      victoria();
    } else {
      // Efecto de suspenso al subir de nivel
      document.getElementById('feedback').innerText = '¡Nivel superado! Preparando siguiente nivel...';
      document.getElementById('pregunta-container').style.transform = 'scale(0.9)';
      document.getElementById('pregunta-container').style.opacity = '0.5';
      setTimeout(() => {
        window.nivel++;
        window.preguntaActual = 0;
        window.vidas = 2;
        window.preguntasCorrectas = 0;
        renderUI();
        mostrarPregunta();
        document.getElementById('pregunta-container').style.transform = 'scale(1)';
        document.getElementById('pregunta-container').style.opacity = '1';
      }, 1500);
    }
  } else {
    mostrarPregunta();
  }
}

function perderVidaNivel() {
  if (window.nivel === 0) {
    gameOver();
  } else {
    // Efecto de suspenso al perder una vida
    document.getElementById('feedback').innerText = '¡Has perdido una vida! Retrocediendo nivel...';
    document.getElementById('pregunta-container').style.transform = 'scale(0.9)';
    document.getElementById('pregunta-container').style.opacity = '0.5';
    setTimeout(() => {
      window.nivel--;
      window.preguntaActual = 0;
      window.vidas = 2;
      window.preguntasCorrectas = 0;
      renderUI();
      mostrarPregunta();
      document.getElementById('pregunta-container').style.transform = 'scale(1)';
      document.getElementById('pregunta-container').style.opacity = '1';
    }, 1500);
  }
}

function victoria() {
  window.juegoTerminado = true;
  document.getElementById('feedback').innerText = '¡Jeffy y Loki atrapan al ratón! ¡Felicidades, completaste todos los niveles!';
  animarPersonaje('raton', 'atrapado');
  reproducirSonido('victoria');
  document.getElementById('reiniciar').style.display = 'block';
}

function gameOver() {
  window.juegoTerminado = true;
  document.getElementById('feedback').innerText = '¡El ratón asusta a Jeffy! ¡Game Over!';
  animarPersonaje('jeffy', 'asustado');
  reproducirSonido('gameover');
  document.getElementById('reiniciar').style.display = 'block';
}

document.getElementById('reiniciar').onclick = () => {
  window.nivel = 0;
  window.preguntaActual = 0;
  window.vidas = 2;
  window.preguntasCorrectas = 0;
  window.juegoTerminado = false;
  document.getElementById('reiniciar').style.display = 'none';
  renderUI();
  mostrarPregunta();
  document.getElementById('feedback').innerText = '';
};

// Animaciones y sonidos (placeholders)
function animarPersonaje(id, estado) {
  const personaje = document.getElementById(id);
  if (id === 'loki') {
    if (estado === 'feliz') {
      personaje.style.transform = 'translateX(20px) scale(1.1)';
    } else if (estado === 'triste') {
      personaje.style.transform = 'translateX(-20px) scale(0.9)';
    }
    setTimeout(() => {
      personaje.style.transform = 'translateX(0) scale(1)';
    }, 500);
  }
}
function reproducirSonido(tipo) {
  // Aquí puedes usar Audio() para reproducir sonidos
  // Ejemplo: new Audio('assets/acierto.mp3').play();
} 