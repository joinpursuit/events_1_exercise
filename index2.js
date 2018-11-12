document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".freeTheJack");
  button.addEventListener("click", () => {
    let count = document.querySelector(".countdown");
    let jack = document.querySelector(".jack-hiding");
    console.log(count);

    let num = Number(count.innerText);
    console.log(num);

    let timer = setInterval(() => {
      num--;
      count.innerText = `${num}`;
      console.log(num);
      if (num === 0) {
        clearInterval(timer);
        jack.classList.remove("jack-hiding");
        console.log(jack);
        jack.classList.add("jack-revealed");
      }
    }, 1000);
  });
});
