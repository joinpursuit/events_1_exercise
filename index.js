// ## Exercise 1: Loaded!
document.addEventListener("DOMContentLoaded", () =>{
  window.alert("The page has loaded.")

// ## Exercise 2: Jack is Back!

    let button = document.querySelector(".jack").addEventListener("click", (event) => {;
      let counting = document.querySelector(".countdown");
      let arr = [0, 1, 2, 3, 4, 5]; //Numbers to count in descending order.

      function countDown(){
        counting.innerText = arr.pop(); //to release the numbers inside class countDown using innerText one by one.
      };

      let timer = setInterval(() => {
        if (arr.length) {
          countDown()
          // h3.innerText;
        } else {
          clearInterval(timer);
          // Time for jack come out of the Box.
          let Jack = document.querySelector(".jack-hiding").style.backgroundImage = `url("https://sep.yimg.com/ay/genius-babies/jester-jack-in-the-box-toy-25.gif")`
        }
      }, 1000);
    })
});
