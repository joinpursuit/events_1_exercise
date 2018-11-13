
function check(){
  let question1 = document.getElementsByName('question1');
  let question2 = document.getElementsByName('question2');
  let question3 = document.getElementsByName('question3');

  console.log(question1)

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

    if(question1[i].checked && question1[i].value === "slytherin"){
      slytherin++;
      console.log(slytherin ,"this is slytherin")
  }
    else if(question1[i].checked && question1[i].value === "griffindor"){
      griffindor++;
      console.log(griffindor ,"this is griffindor")
  }
    else if(question1[i].checked && question1[i].value === "hufflePuff"){
      hufflePuff++;
      console.log( hufflePuff,"this is hufflepuff")
  }
    else if(question1[i].checked && question1[i].value === "ravenClaw"){
      ravenClaw++;
      console.log( ravenClaw,"this is ravenclaw")
    }
}
//console.log(griffindor,"after loop")
  //document.getElementById("displayResults").style.visible ="visible";
  //document.getElementById("classIn").innerText = "you got" + " " + griffindor;

//question 2 loop
    for(let j = 0; j < question2.length; j++){

      if(question2[j].checked && question2[j].value === "slytherin"){
        slytherin++;
    }
      else if(question2[j].checked && question2[j].value === "griffindor"){
        griffindor++;

    }
      else if(question2[j].checked && question2[j].value === "hufflePuff"){
        hufflePuff++;
    }
      else if(question2[j].checked && question2[j].value === "ravenClaw"){
        ravenClaw++;
      }

    }
    //document.getElementById("classIn").innerText = "you got" + " " + slytherin;
    //document.getElementById("classIn").innerText = "you got" + " " + griffindor;


//question 3 loop
    for(let k = 0; k < question3.length; k++){

      if(question3[k].checked && question3[k].value === "slytherin"){
        slytherin++;
    }
      else if(question3[k].checked && question3[k].value === "griffindor"){
        griffindor++;
    }
      else if(question3[k].checked && question3[k].value === "hufflePuff"){
        hufflePuff++;
    }
      else if(question3[k].checked && question3[k].value === "ravenClaw"){
        ravenClaw++;
      }
    }
    console.log('GRIFF', griffindor)
    console.log('SNAKES', slytherin)
    console.log('badgersbagsereebieo', hufflePuff)
    console.log('RAVEN', ravenClaw)

    if(griffindor === 2 || griffindor === 3){
      griffindor = "Griffindor";
        document.getElementById("classIn").innerText = "you got" + " " + griffindor;
    }else if(slytherin === 2 || slytherin === 3){
      slytherin = "Slytherin";
      document.getElementById("classIn").innerText = "you got" + " " + slytherin;
    }else if(hufflePuff === 2 || hufflePuff === 3){
      hufflePuff = "HufflePuff";
        document.getElementById("classIn").innerText = "you got" + " " + hufflePuff;
    }else if(ravenClaw === 2 ||ravenClaw === 3){
      ravenClaw = "RavenClaw"
      document.getElementById("classIn").innerText = "you got" + " " + ravenClaw;
    }

}
