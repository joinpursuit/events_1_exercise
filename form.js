document.addEventListener("DOMContentLoaded", () => {

  let listOfComments =
  [
    {id: 'a1a', comment: "You live for the now"},
    {id: "a1b", comment: "You have simple tastes"},
    {id: "a1c", comment: "You enjoy comfort and warmth"},
    {id: "a1d", comment: "You are self-sacrificing to a fault"},

    {id: "a2a", comment: ", yet are very conscientious. "},
    {id: "a2b", comment: ", yet do hold some thought for the future. "},
    {id: "a2c", comment: ", yet might benefit with some thought of the furture. "},
    {id: "a2d", comment: ", yet you are a risk-taker. "},

    {id: "a3a", comment: "Also, you care about the environment"},
    {id: "a3b", comment: "Also, you are a puritan"},
    {id: "a3c", comment: "Also, you are passionate"},
    {id: "a3d", comment: "Also, you stay in your own head too much"},

    {id: "a4a", comment: " and you care more about happiness than cost."},
    {id: "a4b", comment: " and you don't like living in regret."},
    {id: "a4c", comment: " and you are obsessed with your privacy."},
    {id: "a4d", comment: " and you are very practical."}
  ]

// //------------------------------------
// //change background color on click: -------------------------------
let button = document.querySelectorAll("button");
let buttonArray = Array(...button) //make array out of all the buttons.

buttonArray.forEach(button => {
  button.addEventListener('click', event => {
    console.log(event.target.style)
    if (event.target.style.backgroundColor) {
      event.target.style = "backgroundColor: inherit";
    }else{
      event.target.style = "background-color: yellow";
    }

  })
})


//------------------------------------
// on clicking ".choice" option, it will link , via id, to corresponding evaluation comment:-----------------------------


  let choice = document.querySelectorAll(".choice");
  let results = document.querySelector(".results");

  let choiceArray = Array(...choice)

  let resultString = ''

  choiceArray.forEach (choice => {
    choice.addEventListener("click", event => {

      let choiceContent = event.target.innerText;
      let id = event.target.id;

      let findComment = listOfComments.find((elem) => {
        return elem.id === id //
        });
        console.log('included here: ', findComment)
      if(findComment) {
        console.log('FOUND COMMENT',findComment.comment);
        resultString += findComment.comment
        console.log('RESULT STRING',resultString)
      } else {
        console.log("invalid element");
      }

    function findID(){
      console.log("My resultString:" , resultString);
      resultString;
    }
    findID()

    })

    // console.log(choiceContent);
    // console.log(id);

  })

//------------------------------
//show results div:
  function showResultDiv (node) {
    node.style.display = "inline";
    results.innerHTML = resultString;
  }
//------------------------------
// on click, these functions happen:
  let clickMe = document.querySelector(".clickMe")
  clickMe.addEventListener("click", (event) => {
      showResultDiv(results)
  })

})
