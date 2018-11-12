document.addEventListener('DOMContentLoaded', () => {

  let theEnd = document.querySelector('.finish');
  let result = document.querySelector('.result');

  let quiz = document.querySelector('.quiz');


  let count = 0;

  quiz.addEventListener('change', (event) => {
    count += Number(event.target.value);
  })

  theEnd.addEventListener('click', (event) => {
    result.innerHTML = count;
    event.preventDefault();
    console.log(count);

  })
});












  // let aniMan = document.querySelector('.anime_manga');
  // let aniMan_Op = aniMan.options[aniMan.selectedIndex].id;
  // let ice = document.querySelector('.ice_cream');
  // let ice_Op = ice.options[ice.selectedIndex].id;
  // let catDog = document.querySelector('.cat_or_dog');
  // let catDog_Op = catDog.options[catDog.selectedIndex].id;
  // let onions = document.querySelector('.onions');
  // let onions_Op = onions.options[onions.selectedIndex].id;
  // let earlyRiser = document.querySelector('.early_Riser');
  // let earlyRise_Op = earlyRiser.options[earlyRiser.selectedIndex].id;
  // let candyCorn = document.querySelector('.candy_Corn');
  // let candyCorn_Op = candyCorn.options[candyCorn.selectedIndex].id;




    // switch (aniMan_Op) {
    //   case 'yes':
    //   count += 10;
    //     break;
    //   case 'no':
    //   count += 0;
    //     break;
    //   case 'meh':
    //   count += 5;
    //     break;
    // }
    //
    //   switch (ice_Op) {
    //     case 'rocky':
    //     count += 10;
    //       break;
    //     case 'vanilla':
    //     count += 5;
    //       break;
    //     case 'strawberry':
    //     count += 0;
    //       break;
    //     case 'chocolate':
    //     count += 10;
    //       break;
    //   }
    //
    //   switch (catDog_Op) {
    //     case 'cat':
    //     count += 10;
    //       break;
    //     case 'dog':
    //     count += 5;
    //       break;
    //     case 'other':
    //     count += 5;
    //       break;
    //     case 'eww':
    //     count += 0;
    //       break;
    //   }
    //
    //   switch (onions_Op) {
    //     case 'love':
    //     count += 0;
    //       break;
    //     case 'gross':
    //     count += 20;
    //       break;
    //     case 'okay':
    //     count += 5;
    //       break;
    //   }
    //
    //   switch (earlyRise_Op) {
    //     case 'yup':
    //     count += 0;
    //       break;
    //     case 'ehh':
    //     count += 5;
    //       break;
    //     case uhg:
    //     count += 20;
    //       break;
    //   }
    //
    //   switch (candyCorn_Op) {
    //     case 'disgust':
    //     count += 0;
    //       break;
    //     case 'okay':
    //     count += 10;
    //       break;
    //     case 'loveIt':
    //     count += 20;
    //       break;
    //     case 'NA':
    //     count += 5;
    //       break;
    //     case 'veggie':
    //     count += 10;
    //       break;
    //   }
