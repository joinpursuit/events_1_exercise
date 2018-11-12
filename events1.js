document.addEventListener("DOMContentLoaded", () => {
  // window.alert('The page has loaded')


  let answer1 = document.getElementById('ans1')
  answer1.innerText = question1

  let answer2 = document.getElementById('ans2')
  answer2.innerText = question2

  let answer3 = document.getElementById('ans3')
  answer3.innerText = question3

  let answer4 = document.getElementById('ans4')
  answer4.innerText = question4

  let quizButton = document.querySelector(".quiz")
  quizButton.addEventListener("click", () => {
    let lastAnswer = document.querySelector(".finalAnswer")
    function displayAnswer () {

    if((answer1 === 'Pizza' && answer2 === 'Breadstick') && (answer3 === 'Wine' && answer4 === 'Zepoles')) {
      lastAnswer.push('Hmm, You may be Italian !')
    }else if ((answer1 === 'Hamburger' && answer2 === 'Buffalo Wings') && (answer3 === 'Cocal Cola' && answer4 === 'Funnel Cake')) {
      console.log('Hmm, You may be an American !');
      }
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
