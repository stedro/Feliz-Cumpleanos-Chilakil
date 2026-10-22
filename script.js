document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelope');
  const cardModal = document.getElementById('cardModal');
  const closeCard = document.getElementById('closeCard');

  // Abrir carta
  envelope.addEventListener('click', () => {
    cardModal.classList.add('active');
  });

  // Cerrar carta
  closeCard.addEventListener('click', () => {
    cardModal.classList.remove('active');
  });

  cardModal.addEventListener('click', (e) => {
    if (e.target === cardModal) {
      cardModal.classList.remove('active');
    }
  });

  // Control de Música
  const musicBtn = document.getElementById('musicToggle');
  const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=happy-birthday-113222.mp3');
  audio.loop = true;
  let isPlaying = false;

  musicBtn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      musicBtn.classList.remove('playing');
      musicBtn.querySelector('.music-icon').textContent = '🎵';
    } else {
      audio.play().then(() => {
        musicBtn.classList.add('playing');
        musicBtn.querySelector('.music-icon').textContent = '🎶';
      }).catch(err => {
        console.log('Reproducción automática restringida:', err);
      });
    }
    isPlaying = !isPlaying;
  });
});