
document.addEventListener('DOMContentLoaded', () => {
  let button = document.getElementById("button");
  button.addEventListener("click", () => {
    console.log(document.quiz)

    let question1 = document.querySelector(".question1").value;
    let question2 = document.querySelector(".question2").value;
    let question3 = document.querySelector(".question3").value;
    let total = 0;
      //
      if (question1 === "Chocolate Frogs") {
        total += 4;
      } else if (question1 === "Bertie Bott's Every Flavour Beans") {
        total += 3;;
      } else if (question1 === "Honeydukes Sherbet Lemons") {
        total += 2;
      } else {
        total += 1;
      }

      if (question2 === "Lizard") {
        total += 4;
      } else if (question2 === "Dog") {
        total += 3;;
      } else if (question2 === "Cat") {
        total += 2;
      } else {
        total += 1;
      }

      if (question3 === "Pink") {
        total += 4;
      } else if (question3 === "Purple") {
        total += 3;;
      } else if (question3 === "White") {
        total += 2;
      } else {
        total += 1;
    }

    let houses = ["Slytherin", "Gryffindor", "Hufflepuff", "Ravenclaw"];
    let housePic = ["img/Slytherin.gif", "img/Gryffindor.gif", "img/Hufflepuff.gif", "img/Ravenclaw.gif"];

    document.getElementById("after_submit").style.visibility = "visible";

    let message = document.getElementById("message");
    let pictures = document.getElementById("pictures");

    if (total > 10) {
      message.innerText = houses[0];
      pictures.src = housePic[0];
    } else if (total > 8) {
      message.innerText = houses[1];
      pictures.src = housePic[1];
    } else if (total > 6) {
      message.innerText = houses[2];
      pictures.src = housePic[2];
    } else {
      message.innerText = houses[3];
      pictures.src = housePic[3];
    }
  })
})
