
function check(){
  let question1 = document.getElementsByName('question1');
  let question2 = document.getElementsByName('question2');
  let question3 = document.getElementsByName('question3');

  //console.log(question1)
// let question1 = document.form.question1.value;
// let question2 = document.quizHolder.question2.value;
// let question3 = document.quizHolder.question3.value;
let griffindor = 0;
let slytherin = 0;
let hufflePuff = 0;
let ravenClaw = 0;

//question 1 loop
for(let i=0; i< question1.length; i++){
  // console.log(question[i].value)
  // console.log('question1', question1
  //question 1 logic
  console.log(question1.length)
    if(question1[i].value === "aggressive"){
      slytherin++;
  }
    else if(question1[i].value === "adventerous"){
      console.log(question1[i].value)
      griffindor++;
  }
    else if(question1[i].value === "kind"){
      hufflePuff++;
  }
    else if(question1[i].value === "studious"){
      ravenClaw++;
    }
}
console.log(griffindor,"after loop")
  //document.getElementById("displayResults").style.visible ="visible";
  document.getElementById("classIn").innerText = "you got" + " " + griffindor;

    for(let j = 0; j < question2.length; j++){
      if(question2[j].value === "helping"){
        slytherin++;
    }
      else if(question2[j].value === "themselves"){
        console.log(question1[j].value)
        griffindor++;
    }
      else if(question2[j].value === "explore"){
        hufflePuff++;
    }
      else if(question2[j].value === "saftey"){
        ravenClaw++;
      }

    }

    document.getElementById("classIn").innerText = "you got" + " " + griffindor;
    document.getElementById("classIn").innerText = "you got" + " " + slytherin;

    for(let k = 0; k < question3.length; k++){
      if(question3[k].value === "volunteer"){
        slytherin++;
    }
      else if(question3[k].value === "wants"){
        griffindor++;
    }
      else if(question3[k].value === "hiking"){
        hufflePuff++;
    }
      else if(question3[k].value === "reading"){
        ravenClaw++;
      }
    }

    if(griffindor === 2 || 3){
      griffindor = "Griffindor";
        document.getElementById("classIn").innerText = "you got" + " " + griffindor;
    }
    if(slytherin === 2 || 3){
      slytherin = "Slytherin";
      document.getElementById("classIn").innerText = "you got" + " " + slytherin;
    }
    if(hufflePuff === 2 || 3){
      hufflePuff === "HufflePuff";
        document.getElementById("classIn").innerText = "you got" + " " + hufflePuff;
    }
    if(ravenClaw === 2 || 3){
      ravenClaw === "RavenClaw"
      document.getElementById("classIn").innerText = "you got" + " " + ravenClaw;
    }
console.log(griffindor, "this is griffindor added up")
}
