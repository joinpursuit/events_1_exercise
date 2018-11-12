


  document.addEventListener("DOMContentLoaded" ,()=>{
    //declare our variables we need to use:
    let answer = 0;
    console.log(answer)
    let results = document.querySelector(".results")
    let form1 = document.getElementsByName("formAnswer")
    //we need to refer back to our form and our forms' clicked values
    //everytime a click occurs within the form we want to update the answer by the clicked value


    let submit = document.querySelector(".submit")
    //we need to refer to our submit button

    submit.addEventListener("click",()=>{
    //our function will wait til the user has clicked on the submit button and evaluate their choices on the form 
    //we will only run this function when the user 'submits'

    for(let i = 0; i < form1.length; i++){
      if(form1[i].checked){
          answer += +form1[i].value;
      }
  }

      if (answer === 2){results.innerHTML= "You have died"}
        // node.classList ="died"}
      else if (answer === -2) {results.innerHTML="You have killed Shai"}
        //node.classList ="killed" }
      else{results.innerHTML="You owe Shai your life"}
        // node.classList ="owe"}

      console.log(answer)
})
})
