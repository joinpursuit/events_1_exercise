document.addEventListener('DOMContentLoaded', () => {

  let form = document.querySelector('form');
  let body = document.querySelector('body');
  let result = document.createElement('h2');

  let sum = 0

  // form.addEventListener('change', (event) => {
  //   debugger
  //
  // })

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let checkedValue1 = document.querySelector('input[name="answer1"]:checked').value;
    let checkedValue2 = document.querySelector('input[name="answer2"]:checked').value;
    let checkedValue3 = document.querySelector('input[name="answer3"]:checked').value;
    let checkedValue4 = document.querySelector('input[name="answer4"]:checked').value;
    let checkedValue5 = document.querySelector('input[name="answer5"]:checked').value;
console.log('hiii');
    sum = sum + (+checkedValue1);
    sum = sum + (+checkedValue2);
    sum = sum + (+checkedValue3);
    sum = sum + (+checkedValue4);
    sum = sum + (+checkedValue5);

    if (sum > 2) {
      result.innerText = 'You are a carebear :)';
      body.append(result);
    } else if (sum <= 2 && sum > -2) {
      result.innerText = 'In the middle of the pack';
      body.append(result);
    } else {
      result.innerText = 'Work on caring brah.';
      body.append(result);
    }


  });

});
