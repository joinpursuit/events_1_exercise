
let button = document.querySelector(".button");
button.addEventListener("click", () =>{
  function countdown() {
    let node = document.querySelector(".countdown");
    let num = parseInt(node.innerHTML);
    if (num === 0) {
      let div = document.querySelector("div");
      div.classList.remove("jack-hiding");
      div.classList.add("jack-revealed");
    } else {
      num--;
      node.innerHTML = num;
      console.log(num, node);
      setTimeout(countdown,1000);
    }
  }

  countdown();

})
