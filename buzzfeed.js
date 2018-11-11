
function check(){
let question1 = document.form.question1.value;
let question2 = document.quizHolder.question2.value;
let question3 = document.quizHolder.question3.value;
let griffindor = 0;
let slytherin = 0;
let hufflePuff = 0;
let ravenClaw = 0;
//question 1 logic
  if(question1 === "aggressive"){
    slytherin;
}
  else if(question1 === "adventerous"){
    griffindor;
}
  else if(question1 === "kind"){
    hufflePuff;
}
  else if(question1 === "studious"){
    ravenClaw;
  }
  document.getElementById("displayResults").style.visible ="visible";
  document.getElementById("classIn").innerText = "you got";
}
//document.getElementById("displayResults").style.visibility = "visible";

//
// value="kind">kind <br />
// <input type="radio" name="question1" value="aggressive">aggressive <br />
// <input type="radio" name="question1" value="adventerous">adventerous <br />
// <input type="radio" name="question1" value="studious">studious <br />
