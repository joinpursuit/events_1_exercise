// ## Exercise 3: Feed the Form!

// let first = window.prompts("What is the first thing that happen thru your mind?");
// alert("That almost blow your mind~");

document.addEventListener("DOMContentLoaded", () =>{
  // let choose = document.querySelector(".choose");
  // let img = document.querySelector(".imgsCat");
   // input1.classList.add('imgsCat')
  let img1 = document.createElement("div");
  let img2 = document.createElement("div");
  // let newClass = document.classList("together");
  let input1 = `<div class="box1" style="border: lightgreen solid 1px;"><input type="radio" name="option1" value="tender" id="tender"> </div>`;
  let input2 = `<div class="box2" style="border: lightgreen solid 1px;"><input type="radio" name="option2" value="confident" id="confident"></div>`;
  let button1 = document.querySelector(".frist");
  let button2 = document.querySelector(".second");
  let button3 = document.querySelector(".third");
  let button4 = document.querySelector(".fourth");
  let button5 = document.querySelector(".fifth");

  button1.addEventListener("click", (event) => { // how to use (event) callback function...?? Need to learn more
    button1.style.background = "lightgreen";
    // choose.innerHTML = `${input1} Left ${input2} Right`;
    img1.innerHTML = `${input1} <img style="width: 400px" src='img/confidentCat/bite.jpg'>`;
    img2.innerHTML = `${input2} <img style="width: 400px" src='img/tenderCat/crying.jpg'>`;
    let imgInside = event.target.parentNode.appendChild(img2); //I need both img inside the same div
    let imgInside2 = event.target.parentNode.appendChild(img1);
    event.target.parentNode.insertBefore(imgInside, imgInside2);
    event.preventDefault();
  });

  button2.addEventListener("click", (event) => {
    button2.style.background = "lightgreen";
    // choose.innerHTML = `${input1} Left ${input2} Right`;
    img1.innerHTML = ` ${input1}  <img style="width: 400px" src='img/confidentCat/chill.jpg'>`;
    img2.innerHTML = ` ${input2} <img style="width: 400px" src='img/tenderCat/hiding.jpg'>`;
    let imgInside = event.target.parentNode.appendChild(img2);
    let imgInside2 = event.target.parentNode.appendChild(img1);
    event.target.parentNode.insertBefore(imgInside, imgInside2);
    event.preventDefault();
  });

  button3.addEventListener("click", (event) => {
    button3.style.background = "lightgreen";
    // choose.innerHTML = `${input1} Left ${input2} Right`;
    img1.innerHTML = ` ${input1}  <img style="width: 400px" src='img/confidentCat/cool.jpg'>`;
    img2.innerHTML = ` ${input2}  <img style="width: 600px" src='img/tenderCat/playing.jpg'>`;
    let imgInside = event.target.parentNode.appendChild(img2);
    let imgInside2 = event.target.parentNode.appendChild(img1);
    event.target.parentNode.insertBefore(imgInside, imgInside2);
    event.preventDefault();
  });

  button4.addEventListener("click", (event) => {
    button4.style.background = "lightgreen";
    // choose.innerHTML = `${input1} Left ${input2} Right`;
    img1.innerHTML = ` ${input1} <img style="width: 400px" src='img/confidentCat/relax.jpg'>`;
    img2.innerHTML = ` ${input2} <img style="width: 400px" src='img/tenderCat/sight.jpg'>`;
    let imgInside = event.target.parentNode.appendChild(img2);
    let imgInside2 = event.target.parentNode.appendChild(img1);
    event.target.parentNode.insertBefore(imgInside, imgInside2);
    event.preventDefault();
  });

  button5.addEventListener("click", (event) => {
    button5.style.background = "lightgreen";
    // choose.innerHTML = `${input1} Left ${input2} Right`;
    img1.innerHTML = ` ${input1} <img style="width: 400px" src='img/confidentCat/retrato.jpg'>`;
    img2.innerHTML = ` ${input2} <img style="width: 400px" src='img/tenderCat/tongue.jpg'>`;
    let imgInside = event.target.parentNode.appendChild(img2);
    let imgInside2 = event.target.parentNode.appendChild(img1);
    event.target.parentNode.insertBefore(imgInside, imgInside2);
    event.preventDefault();
  });

  let pointsTender = 0;
  let pointsConfident = 0;
  let tender = document.querySelector("#tender");
  let confident = document.querySelector("#confident");
  // input1. = pointsTender;
  // input2 = pointsConfident;
  let info = document.querySelector(".info");
  let form = document.querySelector("#form");
  let submit = document.querySelector("#submit");

  form.addEventListener("change", (event) => {
    if (event.target.id === tender){
      pointsTender++;
    }else if(event.target.id === confident){
      pointsConfident++;
    }
  });

  submit.addEventListener("click", (event) => {
    if(pointsTender > pointsConfident){
      info.innerHTML = "<p> You have a personality tender </p>"
    }else {
      info.innerHTML = "<p> You have a confident personality </p>"
    };
  });

  // !event.target.value

 //  if (form) {
 // #tender
 // #confident
 //  }




})
