const q = {
  count: 0,
  max: 7,
  acount: 0,
};

const results = {
  active: false,
  db: [],
  store: function (input) {
    this.db.push(input);
  },

  get: function (index) {
    return this.db[index];
  },

  load: function () {
    if (!q.acount) {
      progressBar.update();
      this.active = true;
    }

    q.acount++;
    cardImg.render();
    cardText.render();
    cardPrompt.render();
    cardOptions.render();
  },
};

const getA = () => qna[q.acount];
const getQ = () => qna[q.count];

const question = {
  load: function () {
    progressBar.update();
    q.count++;
    cardImg.update();
    cardText.update();
    cardPrompt.update();
    cardOptions.update();
    nextButton.deactivate();
  },
};

const progressBar = {
  update: function () {
    let perc = (q.count / q.max) * 100;
    document.querySelector('.progress-bar').style.width = perc + '%';
  },
};

const cardImg = {
  update: function () {
    let img = getQ().img;
    this.clear();
    document.querySelector('.img').classList.add(img);
  },

  clear: function () {
    document.querySelector('.img').classList = 'img';
  },

  render: function () {
    let img = getA().img;
    this.clear();
    document.querySelector('.img').classList.add(img);
  },
};

const cardText = {
  update: function () {
    let text = getQ().text(results.db);
    document.querySelector('.card-text').innerText = text;
  },

  render: function () {
    let text = getA().prompt + ' You chose:';
    document.querySelector('.card-text').innerText = text;
  },
};

const cardPrompt = {
  update: function () {
    let prompt = getQ().prompt;
    document.querySelector('.card-prompt').innerText = prompt;
  },

  render: function () {
    let prompt = results.get(q.acount - 1);
    document.querySelector('.card-prompt').innerText = prompt;
  },
};

const cardOptions = {
  update: function () {
    let cardOptions = document.querySelector('.card-options');
    let optArr = getQ().options;
    let name = 'question-' + q.count;
    let node = '';
    let type = qna[q.count].type;
    optArr.forEach(option => {
      let label = option.label;
      let value = option.value;
      node += `<div class="option">
        <label class="option-label">${label}</label>
        <input class="mar option-input" type="${type}" name="${name}" value="${value}" />
      </div>`;
    });
    cardOptions.innerHTML = node;
  },

  render: function () {
    let reply = results.get(q.acount - 1);
    let answer = ``;
    if (getA().type === 'radio') {
      answer += getA().explanation[reply];
    } else {
      answer += getA().explanation;
    }

    let cardOptions = document.querySelector('.card-options');
    cardOptions.innerHTML = `<p class='answer'>${answer}</p>`;
  },
};

const nextButton = {
  state: 0,
  states: ['ready', 'inactive', 'active'],
  getStatus: function () {
    return this.states[this.state];
  },

  deactivate: function () {
    if (this.state !== 1) {
      this.clear();
      this.state = 1;
      this.update();
    }
  },

  activate: function () {
    if (this.state !== 2) {
      this.clear();
      this.state = 2;
      this.update();
    }
  },

  clear: function () {
    let btn = document.querySelector('.button');
    btn.classList.remove(this.states[this.state]);
  },

  update: function () {
    let btn = document.querySelector('.button');
    btn.classList.add(this.states[this.state]);
  },
};
const over = () => {
  let content = document.querySelector('.content');
  content.innerHTML = `<h1>Great Job!</h1><p class="over">Remember, this isn't meant to be 100% accurate, instead, look at it as a chance to understand the hidden depths of your subconscious a little more. Understanding why you do what you do is the first step in implementing effective habits, and in turn, changing your life.</p>`;
};

const validatedInput = function () {
  let type = getQ().type;
  if (type === 'radio') {
    return true;
  } else if (type === 'text') {
    let name = 'question-' + q.count;
    let typeObj = {
      radio: `input[name = ${name}]:checked`,
      text: `input[name = ${name}]`,
    };
    let selector = typeObj[type];
    let value = document.querySelector(selector).value;
    return value.trim() !== '';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', e => {
    if (e.target.classList.contains('option-input')) {
      nextButton.activate();
    }
  });
  document.querySelector('.button').addEventListener('click', e => {
    if (nextButton.getStatus() === 'active' && !results.active && validatedInput()) {
      let type = getQ().type;
      let name = 'question-' + q.count;
      let typeObj = {
        radio: `input[name = ${name}]:checked`,
        text: `input[name = ${name}]`,
      };
      let selector = typeObj[type];
      let value = document.querySelector(selector).value;
      results.store(value);
      loadQ();
    } else if (results.active) {
      q.acount >= q.max ? over() : results.load();
    }
  });
  loadQ();
});

const loadQ = () => (q.count >= q.max ? results.load() : question.load());

let qna = {
  1: {
    type: 'radio',
    img: `img-walkto`,
    text: function (db) {
      return `Pretend your one true love lives in the middle of a forest. Picture yourself about to walk through this beautiful forest to go visit them. The sun is out, there's a perfect breeze. It's just beautiful.`;
    },

    prompt: `Which path do you take to get there?`,
    options: [{
        label: `The curvy path.`,
        value: `curvy`,
      },
      {
        label: `The straight path.`,
        value: `straight`,
      },
    ],
    explanation: {
      curvy: `Your answer to this represents how you like to be courted. Apparently you have a taste for the dramatic, and enjoy the dating process.`,
      straight: `Your answer to this represents how you like to be courted. Apparently you like to get straight to business and don't have time for drama.`,
    },
  },
  2: {
    type: `text`,
    img: `img-rainforest`,
    text: function (db) {
      return `Suddenly it starts to rain! You take cover and run inside a cave. Inside the cave, you see a pair of eyes...`;
    },

    prompt: `What creature do these eyes belong to?`,
    options: [{
      label: `Enter Your Answer Here:`,
      value: ``,
    }, ],
    explanation: `The creature you see in the cave is your subconscious' representation of your innerself and who you truly are on the inside. Think about how these different traits may apply to how you see yourself: was the creature big or small, delicate or strong? Especially reflect on contrasting traits (big and cuddly, small and fierce) and note how others may see you.`,
  },
  3: {
    type: `text`,
    img: `img-leavecave`,
    text: function (db) {
      return `The rain stops as suddenly as it started. You step outside the cave, and...`;
    },

    prompt: `What is the first creature you see?`,
    options: [{
      label: `Enter Your Answer Here:`,
      value: ``,
    },],
    explanation: `The creature you see as you exit the cave is your subconscious' representation of what type of traits in a partner your innerself tends to seek out. Think about how these different traits may apply to past or present relationships: was the creature a flashy spectacle or a fleeting glimpse, delicate or powerful? Especially reflect on contrasting traits (elusive and gentle, agressive and cute) and compare how others may have viewed your previous relationship partners.`,
  },
  4: {
    type: `text`,
    img: `img-forest`,
    text: function (db) {
      return `This ${db[2]} that you see...`;
    },

    prompt: `What does it do?`,
    options: [{
      label: `Enter Your Answer Here:`,
      value: ``,
    },],
    explanation: `The way this creature reacts is how your subconscious desires your partner to act. Perhaps only during the dating process or perhaps in a more intimate relationship or even a little of both. Was the creature aggresive or proactively engaging with you, or was it a little coy or even try to take you on a chase? Think about how these different traits may apply to your past or present relationships. Once again, be sure to note conflicting traits: powerful and elusive, flashy and passive...`,
  },
  5: {
    type: 'radio',
    img: `img-drink`,
    text: function (db) {
      return `You continue your journey and your true love greets you at the door with a glass of your favorite drink. During your visit...`;
    },

    prompt: `How much of your favorite drink do you drink?`,
    options: [{
        label: `Sparingly:<br>savor each drop.`,
        value: `savor`,
      },
      {
        label: `Just the right amount:<br>no more, no less.`,
        value: `justRight`,
      },
      {
        label: `Too much is never enough.`,
        value: `excess`,
      },
    ],
    explanation: {
      savor: 'Your favorite drink represents how much attention you need, want, and desire from your partner in a relationship. Apparently you feel that a little bit of longing goes a long way (either from your and|or from your partner) and moderation in time spent together allows you to savor those moments all the better. Take note on if this is how you feel during the dating processs, and|or when in a more intimate relationship, or if just when picturing someone in particular.',
      justRight: 'Your favorite drink represents how much attention you need, want, and desire from your partner in a relationship. You feel quite satisfied in the time you have together and rarely, if ever, feel suffocated nor do you smother your partner. Take note on if this is how you feel during the dating processs, and|or when in a more intimate relationship, or if just when picturing someone in particular.',
      excess: `Your favorite drink represents how much attention you need, want, and desire from your partner in a relationship. Apparently you desire a lot of time and attention from your partner, and life is best when you're with the one you love. Take note on if this is how you feel during the dating processs, and|or when in a more intimate relationship, or if just when picturing someone in particular.`,
    },
  },
  6: {
    type: 'radio',
    img: `img-phone`,
    text: function (db) {
      return `You have an amazing evening with your true love. Later that night, right after they leave the room, their phone, sitting on an end table right next to you, receives an incoming message notification popup - on silent. During those brief few seconds the message appears on their screen...`;
    },

    prompt: `Do you read the notification?`,
    options: [{
        label: `Yes`,
        value: `yes`,
      },
      {
        label: `Nah`,
        value: `nah`,
      },
    ],
    explanation: {
      yes: `Deep down you may get a little jelly around your partner but hey, at least you're honest about it.`,
      nah: `Deep down you're confident and secure in your relationship, your partner, and perhaps most importantly, in yourself.`,
    },
  },
  7: {
    type: 'radio',
    img: `img-walkback`,
    text: function (db) {
      return `After a wonderful time with your true love, it's time to go. After saying goodbye...`;
    },

    prompt: `Which path do you take when leaving?`,
    options: [{
        label: `The curvy path.`,
        value: `curvy`,
      },
      {
        label: `The straight path.`,
        value: `straight`,
      },
    ],
    explanation: {
      curvy: `Your answer to this represents how you are when a relationship comes to an end. You tend to drag out a relationship past its expiration date whether in the form of breaking up and making up. In regards to short romances, you may try to keep the coals burning as long as possible.`,
      straight: `Your answer to this represents how you are when a relationship comes to an end. You don't like playing games, when a relatinship comes to an end, it's time to move on to bigger and better things.`,
    },
  },
};
