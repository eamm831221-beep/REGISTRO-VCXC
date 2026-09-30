// Registro del Service Worker para funcionamiento Offline
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('js/sw.js')
    .then(() => console.log('Service Worker Registrado Exitosamente'))
    .catch(err => console.error('Error al registrar Service Worker', err));
}

// Aquí puedes añadir tus funciones de navegación entre pantallas, por ejemplo:
function cambiarPantalla(pantallaId) {
  document.querySelectorAll('.app-screen').forEach(screen => {
    screen.classList.remove('active');
  });
  const activa = document.getElementById(pantallaId);
  if(activa) activa.classList.add('active');
}
