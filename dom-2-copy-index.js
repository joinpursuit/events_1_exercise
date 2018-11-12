document.addEventListener('DOMContentLoaded', () => {
  let countdown = document.querySelector('.countdown');
  let button = document.querySelector('button');

  let image = document.querySelector('.jack-hiding');


  let counter = 5;

  document.addEventListener('click', (event) => {
    let timer = setInterval(() => {
      if (counter >= 0) {
        countdown.innerHTML = counter;
        counter--;
      } else {
        clearInterval(timer);
        image.classList.add("jack-revealed");
      }
    }, 1000);
  });
});
