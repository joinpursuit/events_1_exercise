document.addEventListener("DOMContentLoaded",()=>{
    let button = document.querySelector(".button")
        button.addEventListener("click",()=>{
          let countdown = document.querySelector('.countdown');
            let image = document.querySelector('.jack-hiding');
  setInterval(() => {
    if(countdown.innerText > 0) {
      countdown.innerText-- //= countdown.innerText-1
    }else {
      clearInterval();
      image.classList.add("jack-exposed");
      };
    },1000);
  });
});
