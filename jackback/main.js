document.addEventListener('DOMContentLoaded', () => {
  let countdown = document.querySelector('.countdown');
  let counter = 5;
  const startTimer = () => {
    const timer = setInterval(() => {
      if (counter <= 0) {
        clearInterval(timer);
        showJack();
      } else {
        counter--;
        countdown.innerText = counter;
      }
    }, 1000);
  };

  let button = document.querySelector('.wind-up-button');
  button.addEventListener('click', e => {
    e.preventDefault();
    startTimer();
  });

  const showJack = () => {
    let div = document.querySelector('#img');
    div.classList.remove('jack-hiding');
    div.classList.add('jack-show');
  };
});
