const cow = document.getElementById('cow');
const loveMessage = document.getElementById('love-message');
const confettiCanvas = document.getElementById('confetti');
const ctx = confettiCanvas.getContext('2d');

// Ajustar el tamaño del canvas para cubrir toda la pantalla
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confettiParticles = [];

// Función para generar confeti
function createConfetti() {
  for (let i = 0; i < 300; i++) {
    confettiParticles.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height,
      size: Math.random() * 5 + 2,
      speedX: Math.random() * 5 - 2.5,
      speedY: Math.random() * 5 - 2.5,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
  }
}

// Función para dibujar confeti
function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiParticles.forEach((particle) => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();

    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x < 0 || particle.x > confettiCanvas.width || particle.y < 0 || particle.y > confettiCanvas.height) {
      particle.x = Math.random() * confettiCanvas.width;
      particle.y = Math.random() * confettiCanvas.height;
    }
  });
}

// Función para iniciar la animación del confeti
function startConfetti() {
  createConfetti();
  setInterval(drawConfetti, 20);
}

// Evento cuando se hace clic en la vaca
cow.addEventListener('click', () => {
  // Mostrar el mensaje con la animación
  loveMessage.classList.remove('hidden');
  loveMessage.style.visibility = 'visible';  // Mostrar el mensaje con animación
  startConfetti(); // Iniciar el confeti
});
