function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');

    document.getElementById('imageDuck')
    .style.display = "none";

    document.getElementById('imagePig')
    .style.display = "none";

    document.getElementById('imageHorse')
    .style.display = "none";

    document.getElementById('imageCow')
    .style.display = "none";

    document.getElementById('imageGoat')
    .style.display = "none";

    document.getElementById('imageChicken')
    .style.display = "none";

  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  function showImage(e) {
    const picture = document.querySelector(`img[data-key="${e.keyCode}"]`);
    picture.style.display = "block";
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  window.addEventListener('keydown', showImage);