let countDown = document.querySelector('.countdown')

let counter = 5

const timer = setInterval(() => {
  if (counter <= 0) {
    clearInterval();
    jack_pop();
  }else{
    counter--;
    countDown.innerText = counter;
  }
}, 1000)


const jack_pop = () => {
  let jack = document.querySelector('.jack-hiding');
  jack.classList.remove('.jack-hiding');
  jack.classList.add('.jack-popping');
  jack.style.backgroundImage = "url(https://sep.yimg.com/ay/genius-babies/jester-jack-in-the-box-toy-25.gif)";
}
