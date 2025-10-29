const form = document.getElementById('registro');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const curso = document.getElementById('curso').value.trim();

  if (nombre && curso) {
    localStorage.setItem('jugador', JSON.stringify({ nombre, curso }));
    window.location.href = 'nivel1.html';
  }
});
