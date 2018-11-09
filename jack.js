
//wrap everything inside eventListener heading:
document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".clickMe");
  button.addEventListener("click", (event) => {

//countdown:-------------
    let arr = [0,1,2,3,4]

    function countDown (node) {
      node.innerText = arr.pop();
    }
//start countdown:----------
    let timer = setInterval(() => {
      let theTime = document.querySelector(".countdown");

      if (arr.length) {
        countDown(theTime);
      } else {
        clearInterval(timer)
      }
    }, 1000)

// //jack:-----------
    function changeImg(node) {
      node.classList.remove("jack-hiding")
      node.classList.add("jack-seen")
    }
// // the message:-----------
    function changeMessage(node) {
      node.innerHTML = "Here! Being silly :}"
    }
//invoke changes:-----------
    setTimeout(() => {
      theJack = document.querySelector(".jack-hiding");
      theMessage = document.querySelector(".jack-message");

      changeImg(theJack);
      changeMessage(theMessage)

    },5000)

  })
})
