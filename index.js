document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".button");

  button.addEventListener("click", () => {
    let count = document.querySelector(".countdown");
    let pic = document.querySelector(".jack-hiding");
    let secs = 4;
    let interval = setInterval(function() {
      count.innerText = secs;
      if (secs === 0) {
        clearInterval(interval);
        pic.style[
          "background-image"
        ] = `url("https://sep.yimg.com/ay/genius-babies/jester-jack-in-the-box-toy-25.gif")`;
      }
      secs--;
    }, 1000);
    console.log(count.classList);
    console.log(pic.style);
  });
});
