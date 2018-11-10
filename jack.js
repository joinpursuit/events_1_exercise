document.addEventListener('DOMContentLoaded', () => {


let counterObj = document.querySelector('.countdown');
let jack = document.querySelector('.jack-hiding');
let count = 5;
let jackMessage = document.querySelector('.jack-message')
let button = document.querySelector('.button');

function jackPop () {
    jack.classList += " jackPopup"
};

function changeCount () {
  if (count > 0) { 
    counterObj.innerHTML = count
    count--;
    setTimeout(() => {
        changeCount();
    }, 1000);
   } else {
    counterObj.innerHTML = count;
    jackPop();
    jackMessage.innerHTML = 'Here he is! WOOOOO!';
   }
}

button.addEventListener('click', () => {
    changeCount();
})

})