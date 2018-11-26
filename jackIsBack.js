let countDown = document.querySelector(".countdown");

let jack = document.querySelector(".jack-hiding");
let button = document.querySelector(".button");
button.addEventListener("click", function() {
  let counter = 5;
  let stop = setInterval(() => {
    if (counter < 1) {
      jack.classList.remove("jack-hiding");
      jack.classList.add("new-jack");

      countDown.innerText = counter;
      clearInterval(stop);
    } else {
      countDown.innerText = counter;
    }

    counter--;
  }, 1000);
});
