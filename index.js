document.addEventListener('DOMContentLoaded', () => {
  let button = document.querySelector('.button');
  button.addEventListener('click', () => {
      let countdown = document.querySelector('.countdown');
      let counter = 5;

      setInterval(() => {
        if (counter <= 0) {
          clearInterval();
          jack_pop();
        }else {
          counter--;
          countdown.innerText = counter;
        }
      }, 1000);

      const jack_pop = () => {
        let jack = document.querySelector('.jack-hiding');
        jack.classList.remove('.jack-hiding');
        jack.style.backgroundImage = 'url(https://sep.yimg.com/ay/genius-babies/jester-jack-in-the-box-toy-25.gif)';
      };
    });

});
