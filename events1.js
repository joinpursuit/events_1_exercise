document.addEventListener("DOMContentLoaded", () => {
  // window.alert('The page has loaded')

  let question1 = window.prompt('Which food do you like')
  let answer1 = document.getElementById('quest1')
  answer1.innerText = question1

  let question2 = window.prompt('Which appetizer do you prefer')
  let answer2 = document.getElementById('quest2')
  answer2.innerText = question2

  let question3 = window.prompt ('Which drink do you prefer')
  let answer3 = document.getElementById('quest3')
  answer3.innerText = question3

  let question4 = window.prompt ('Which dessert do you prefer')
  let answer4 = document.getElementById('quest4')
  answer4.innerText = question4

  let quizButton = document.querySelector(".quiz")
  quizButton.addEventListener("click", () => {
    if(answer1 === 'pizza' && answer2 === 'breadstick' && answer3 === 'wine' && answer4 === 'zepoles') {
      console.log('Hmm, You may be Italian !')
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
