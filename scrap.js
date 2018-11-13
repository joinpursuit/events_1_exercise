  const filterWord = (arr, badWord) => {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
      let comment = arr[i].comment;
      let splitComment = comment.split(" ");
      let okToPush = true;
      for (let j = 0; j < splitComment.length; j++) {
        if (badWord[splitComment[j]]) {
          okToPush = false;
        }
      }

      if(okToPush) {
        answer.push(arr[i])
      }
    }
    return answer;
  }
  })

  let myArr = [
  {id: 1, comment: "This is bad"},
  {id: 2, comment: "This is good"}
]

console.log(filterWord(myArr, {
  "bad": true,
  "dude": true,
  "gun": true
}));

//scrap. 226 lines:---------
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
  // debugger
  // function showSelection(node) {
  //   node.classList.remove("choice")
  //   node.classList.add("chosen")
  // }

// console.log(document.querySelector(".choice").innerText);

  // let q1 = document.querySelectorAll("h1");
  //




// let choice = document.querySelectorAll(".choice");
// console.log(choice).innerText;
// let resultDiv = document.querySelector(".results").innerHTML;
// console.log(resultDiv);



  // button.style.backgroundColor = "yellow"





  // let button = document.querySelectorAll("button");
  //
  // button.addEventListener("click", (event) => {
  //   // button.style.backgroundColor = "yellow"
  //
  // })



// let body = document.querySelector("body");
// body.addEventListener("click", event => {
//   // console.log("CURRENT TARGET 3", event.currentTarget);
//   // event.target.style = "color: red"
//
//   // console.log('QUERY SELECTOR FOR BUTTON',button)
//   // console.log('ATTEMPT ARRAY', Array(...button))
//
// });

// //------------------------------------
// //change background color on click:-------------------------------
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
// // //----------------------------------
// //match id clicked to id.comment in array of objects
//
// function findID (array, id) {
//   let resultsString = "";
//   for (let i = 0; i < array.length; i++) {
//     let idArray = array[i].id;
//     let comment = array[i].comment;
//   //   if (id) {
//   //
//       resultsString.push(array[i])
//   //   }
//
//   console.log(id, ": ", comment);
//   console.log(1, 2, 3);
//
//   }
// }

// findID(objEvaluation, a1a)


//------------------------------------
// on clicking ".choice" option, it will link , via id, to corresponding evaluation comment:-----------------------------

// function findID () {
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
    console.log("this:" , resultString);

  }

  findID()
// console.log("this is my resultString", resultString);
      // console.log(choiceContent, "and id: ", id);
    })

    // console.log(choiceContent);
    // console.log(id);

  })
// }


//------------------------------
//show results div:
  function showResultDiv (node) {
    node.style.display = "inline";
  }
//------------------------------
// on click, these functions happen:
let clickMe = document.querySelector(".clickMe")
clickMe.addEventListener("click", (event) => {

    showResultDiv(results)


    results.innerHTML = resultString;
    // findID()

})
//------------------------------




// listOfComments.forEach
//   console.log(listOfComments[i].includesid);
//
//
//
// //
//
//   let array = [
//     {id: 1, comment: "This is bad"},
//     {id: 2, comment: "This is good"}
//   ]
//
//   const filterWord = (arr, badWord) => {
//     let answer = [];
//     for (let i = 0; i < arr.length; i++) {
//       let comment = arr[i].comment;
//       let splitComment = comment.split(" ");
//       let okToPush = true;
//       for (let j = 0; j < splitComment.length; j++) {
//         if (badWord[splitComment[j]]) {
//           okToPush = false;
//         }
//       }
//
//       if(okToPush) {
//         answer.push(arr[i])
//       }
//     }
//     return answer;
//   }
//
//
// //
//
//   let body = document.querySelector("body");
// body.addEventListener("click", event => {
//   console.log("CURRENT TARGET 3", event.currentTarget);
//   event.target.style = "color: red"
//   debugger;
// });


})



//scrap:---------------------
// function changeColor(node) {
//   node.style.backgroundColor = "green"
// }


// -----------end of 226 lines scrap----------
