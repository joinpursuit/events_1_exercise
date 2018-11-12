let jackHiding = document.querySelector('.jack-hiding')
function changeimage(node) {node.classList ="jack";}


let count = document.querySelector('.countdown')


document.addEventListener("DOMContentLoaded" ,()=>{
  let button = document.querySelector(".button")
  let count = document.querySelector('.countdown')
  button.addEventListener("click",() =>{
    setTimeout(() => {changeimage(jackHiding)},5000);
    setTimeout(() => {count.innerHTML = "4"},1000);
    setTimeout(() => {count.innerHTML = "3"},2000);
    setTimeout(() => {count.innerHTML = "2"},3000);
    setTimeout(() => {count.innerHTML = "1"},4000);
    setTimeout(() => {count.innerHTML = "0"},5000);

    //
    //setInterval(()=>{count.innerHTML = "",1000})
    //
  })
})
