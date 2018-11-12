document.addEventListener('DOMContentLoaded', () => {
let push = document.querySelector('#pop_jack');

push.addEventListener('click', () => {

  let countingDown = document.querySelector('.countdown');
  let counter = 5;

  const timer = setInterval(() => {

    if (counter <= 0) {
      clearInterval();
      show_jack();
    } else {
      countingDown.innerHTML = counter;
      counter--;
    }

    return counter;
  }, 1000)
  
});


  const show_jack = () => {
    let heresJacky = document.querySelector('.jack-hiding');
    heresJacky.classList.remove('.jack-hiding');
    heresJacky.classList.add('.jack-popping');
    heresJacky.style.backgroundImage = "url('https://sep.yimg.com/ay/genius-babies/jester-jack-in-the-box-toy-25.gif')";

  }

});
