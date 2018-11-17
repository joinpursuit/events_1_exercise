const options = [
  {title: "Always", value: 1},
  {title: "Sometimes", value: 0},
  {title: "Never", value: -1},
]

const quizData = [
  { question: "Does spending time in nature relax and recharge you?",
    options: options,
  },
  { question: "Do you get bored quickly?" ,
    options: options,
  },
  { question: "Do you find yourself 'feeling' other people's emotions?" ,
    options: options,
  },
  { question: "DO your friends often unload their problems onto you?" ,
    options: options,
  },
  { question: "Do you become overwhelmed in close relationships?" ,
    options: options,
  },
]

document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let body = document.querySelector('body');
  let result = document.createElement('h2');

  generateQuizHtml(quizData)

  form.addEventListener('change', (event) => {
    console.log(event)
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const checkedValues = quizData.map((x, i) => {
      return document.querySelector(`input[name="answer${i}"]:checked`).value
    })
    const sum = checkedValues.reduce((acc, cur) => acc + cur)

    gradeQuiz(sum, result, body)
  });
});

function generateQuizHtml(quizData) {
  const quizContainer = document.querySelector('.quiz')

  quizContainer.innerHTML = quizData.map((x, i) => `
      <p>${x.question}</p>
      <input class="messageCheckbox1" type="radio" name="answer${i}" value="${x.options[0].value}"> ${x.options[0].title}
      <input class="messageCheckbox1" type="radio" name="answer${i}" value="${x.options[1].value}"> ${x.options[1].title}
      <input class="messageCheckbox1" type="radio" name="answer${i}" value="${x.options[2].value}"> ${x.options[2].title}
    `
  )
}

function gradeQuiz(sum, result, body) {
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
}
