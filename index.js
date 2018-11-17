
// document.addEventListener("DOMContentLoaded", () => {
// window.alert("The Page Is Fully Loaded like a Potato")
// })


  window.alert("Let's Find Out The Type of Crazy The Lives Inside of You by Taking A Random Ass Quiz That Does Not Really Test For Anything and The Two Are Totally Unrelated!!!  LET'S BEGIN!!!");

  document.addEventListener("DOMContentLoaded", () => {
    let clicked = document.querySelector(".btn");
    let form = document.querySelector(".idk")
    let pollOne = document.querySelector('.pollOne')
    let pollTwo = document.querySelector(".pollTwo")
    let pollThree = document.querySelector(".pollThree")
    let score = document.querySelector(".score")
    let normal = document.querySelector(".normal")
    let almost = document.querySelector(".almost")
    let certified = document.querySelector(".certified")
    let crazy = document.querySelector(".crazy")
    let choiceOne = document.querySelector(".one")
    let choiceTwo = document.querySelector(".two")
    let choiceThree = document.querySelector(".three")
    let choiceFour = document.querySelector(".four")
    let choiceFive = document.querySelector(".five")
    let choiceSix = document.querySelector(".six")
    let choiceSeven = document.querySelector(".seven")
    let choiceEight = document.querySelector(".eight")
    let choiceNine = document.querySelector(".nine")
    let choiceTen = document.querySelector(".ten")
    let choiceEleven = document.querySelector(".eleven")
    let choiceTwelve = document.querySelector(".twelve")
    let a = document.querySelector(".a")
    let b = document.querySelector(".b")
    let c = document.querySelector(".c")
    let d = document.querySelector(".d")


      clicked.addEventListener("click", () => {

      if (choiceOne.checked && choiceFive.checked && choiceNine.checked){
        a.innerText++;
        }
       else if (choiceTwo.checked && choiceSix.checked && choiceTen.checked){
        b.innerText++
      } else if (choiceThree.checked && choiceSeven.checked && choiceEleven.checked){
        c.innerText++
      } else if (choiceThree.checked && choiceEight.check && choiceTwelve.checked){
        d.innerText++
      }
    })
  })



// let button = document.querySelector(".wind-up")
//
// button.addEventListener("click", event => {
//
// let countdown = document.querySelector(".countdown");
// let show = document.querySelector(".jack-hiding");
// let jackOut = document.querySelector(".jack-message")
//  let num = 4
//   let interval = setInterval(function() {
//     countdown.innerText = num;
//     if (num === 0) {
//       clearInterval(interval);
//       show.classList.remove("jack-hiding");
//       show.classList.add("jack-showing");
//       jackOut.classList.remove("jack-message")
//       jackOut.classList.add("creepy-text");
//       jackOut.innerText = "HERE'S JACK!";
//     }
//     num--;
//   }, 1000);
// })
