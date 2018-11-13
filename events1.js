document.addEventListener("DOMContentLoaded", () => {
  // window.alert('The page has loaded')

  let submit = document.querySelector(".quizSubmit")
  submit.addEventListener("click", () => {

      let question1 = document.quiz.question1.value;
      let question2 = document.quiz.question2.value;
      let question3 = document.quiz.question3.value;
      let question4 = document.quiz.question4.value;
      // let count = 0;

      if((question1 === 'Pizza' && question2 === 'Breadsticks') && (question3 === 'Wine' && question4 === 'Zepoles')) {
        // count++

        document.getElementById("afterSubmit").style.visibility = "visible";
        document.getElementById("corrected").innerHTML = "You might be Italian"

      }

      if((question1 === 'Hamburger' && question2 === 'Buffalo Wings') && (question3 === 'Coca Cola' && question4 === 'Funnel Cake')) {
        // count++

        document.getElementById("afterSubmit").style.visibility = "visible";
        document.getElementById("corrected").innerHTML = "You might be American"

      }

      if((question1 === 'Quesadilla' && question2 === 'Nachos') && (question3 === 'Jarritos' && question4 === 'Churros')) {
        // count++

        document.getElementById("afterSubmit").style.visibility = "visible";
        document.getElementById("corrected").innerHTML = "You might be Mexican"

      }

      if((question1 === 'Mofongo' && question2 === 'Fritura') && (question3 === 'Malta' && question4 === 'Habichuela con Dulce')) {
        // count++

        document.getElementById("afterSubmit").style.visibility = "visible";
        document.getElementById("corrected").innerHTML = "You might be Dominican"

      }

      if((question1 === 'Pizza' && question2 === 'Buffalo Wings') && (question3 === 'Coca Cola' && question4 === 'Funnel Cake')) {
        // count++

        document.getElementById("afterSubmit").style.visibility = "visible";
        document.getElementById("corrected").innerHTML = "Hmm, you seem to be Italian & American !"

      }

      if((question1 === 'Mofongo' && question2 === 'Breadsticks') && (question3 === 'Malta' && question4 === 'Zepoles')) {
        // count++

        document.getElementById("afterSubmit").style.visibility = "visible";
        document.getElementById("corrected").innerHTML = "Hmm, you seem to be Dominican & Italian"
      }

      if((question1 === 'Quesadilla' && question2 === 'Breadsticks') && (question3 === 'Wine' && question4 === 'Churros')) {
        // count++

        document.getElementById("afterSubmit").style.visibility = "visible";
        document.getElementById("corrected").innerHTML = "Hmm, you seem to be Italian & Mexican"
      }


  })

  let button = document.querySelector(".buttons")
  button.addEventListener("click", () => {
    let count = document.querySelectorAll(".countdown")

    let changes = document.querySelector(".jack-hiding")

    function changeImage (node){
      node.classList.add("changes")
    }

    function countDown() {
      count[0].innerText = count[0].innerText - 1
    }


    let down = window.setInterval(countDown, 1000)

    setTimeout(() =>{
      clearInterval(down)
      changeImage(changes);
    }, 5000)

  })




})




// function check() {
//   let question1 = document.quiz.question1.value;
//   let question2 = document.quiz.question2.value;
//   let question3 = document.quiz.question3.value;
//   let question4 = document.quiz.question4.value;
//   let count = 0;
//
//   if((question1 === 'Pizza' && question2 === 'Breadsticks') && (question3 === 'Wine' && question4 === 'Zepoles')) {
//     count++
//
//     document.getElementById("afterSubmit").style.visibility = "visible";
//     document.getElementById("corrected").innerHTML = "You got Italian"
//
//   }
//
//   if((question1 === 'Hamburger' && question2 === 'Buffalo Wings') && (question3 === 'Coca Cola' && question4 === 'Funnel Cake')) {
//     count++
//
//     document.getElementById("afterSubmit").style.visibility = "visible";
//     document.getElementById("corrected").innerHTML = "You got American"
//
//   }
//
//   if((question1 === 'Quesadilla' && question2 === 'Nachos') && (question3 === 'Jarritos' && question4 === 'Churros')) {
//     count++
//
//     document.getElementById("afterSubmit").style.visibility = "visible";
//     document.getElementById("corrected").innerHTML = "You got Mexican"
//
//   }
//
//   if((question1 === 'Mofongo' && question2 === 'Fritura') && (question3 === 'Malta' && question4 === 'Habichuela Con Dulce')) {
//     count++
//
//     document.getElementById("afterSubmit").style.visibility = "visible";
//     document.getElementById("corrected").innerHTML = "You got Dominican"
//
//   }
//
//   if((question1 === 'Pizza' && question2 === 'Buffalo Wings') && (question3 === 'Coca Cola' && question4 === 'Funnel Cake')) {
//     count++
//
//     document.getElementById("afterSubmit").style.visibility = "visible";
//     document.getElementById("corrected").innerHTML = "Hmm, you seem to be Italian & American !"
//
//   }
//
//   if((question1 === 'Mofongo' && question2 === 'Nachos') && (question3 === 'Malta' && question4 === 'Habichuela con Dulce')) {
//     count++
//
//     document.getElementById("afterSubmit").style.visibility = "visible";
//     document.getElementById("corrected").innerHTML = "Hmm, you seem to be Dominican & Mexican"
//   }
//
//
// }
