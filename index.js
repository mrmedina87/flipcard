(function () {
  const flipCard = document.querySelector('.flip-card');
  const flitButtons =  document.querySelectorAll('.flip-it');
  const handleFlip = e => {
    flipCard.classList.toggle("flipped");
  };
  flitButtons.forEach(element => {
    element.addEventListener('click', handleFlip);
  });
})();