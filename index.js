
// document.addEventListener("DOMContentLoaded", () => {
// window.alert("The Page Is Fully Loaded like a Potato")
// })


  window.alert("Let's Find Out The Type of Crazy The Lives Inside of You by Taking A Random Ass Quiz That Does Not Really Test For Anything and The Two Are Totally Unrelated!!!  LET'S BEGIN!!!");

 let questions = [
   {
     prompt:"What first comes to my when you think cheese? \n 1: Eat it \n 2:Gross \n 3:I'm high right now so I could definitely eat some cheese \n 4: To get to the other side, Duh!",
     answer: ""
   },
   {
     prompt:"Why did the chicken cross the road? n\ 1: To laugh at the turkeys during holiday season....from afar! \n 2: To escape the annoying vegans telling everyone that they are vegans without anyone asking \n  3: Man...I'm wayyy too high for this.... \n 4: To get to the other side, Duh!",
     answer: ""
   },
   {
     prompt:"what is the meaning of life? \n 1: Life is what you make of it... \n 2:Fuck bitches, get money! \n 3: Please don't blow my high \n 4: It's more about the journey and the people you meet along the way",
     answer: ""
   },
   {
     prompt:"How much wood can a woodchuck chuck if a woodchuck could chuck wood \n 1: GTFOH with That Bullshit! \n 2: Who really comes up with this bullshit? \n 3: Great! You fucking blew my high! I still want cheese though \n 4: Hmmm...So many variables to consider... ",
     answer: ""
   }

 ]

 let score = 0;

 for(let i = 0; i < questions.length; i++){
   let response = window.prompt(questions[i].prompt)
   if(response === "1"){
     document.querySelector(".a").innerText++;
   }
   if(response === "2"){
     document.querySelector(".b").innerText++;
   }
   if(response === "3"){
     document.querySelector(".c").innerText++
   }
   if(response === "4"){
     document.querySelector(".d").innerText++
   }
 }


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
