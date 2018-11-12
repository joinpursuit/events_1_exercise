document.addEventListener('DOMContentLoaded', () => {

  let theEnd = document.querySelector('.finish');
  let result = document.querySelector('.result');
  let aniMan = document.querySelector('.anime_manga');
  let aniMan_Op = aniMan.options[aniMan.selectedIndex].id;
  let ice = document.querySelector('.ice_cream');
  let ice_Op = ice.options[ice.selectedIndex].id;
  let catDog = document.querySelector('.cat_or_dog');
  let catDog_Op = catDog.options[catDog.selectedIndex].id;

  let count = 0;
  // debugger

  const ansCount = () => {

    switch (aniMan_Op) {
      case 'yes':
      count += 10;
        break;
      case 'no':
      count += 0;
        break;
      case 'meh':
      count += 5;
        break;
    }

      switch (ice_Op) {
        case 'rocky':
        count += 10;
          break;
        case 'vanilla':
        count += 5;
          break;
        case 'strawberry':
        count += 0;
          break;
        case 'chocolate':
        count += 10;
          break;
      }

      switch (catDog_Op) {
        case 'cat':
        count += 10;
          break;
        case 'dog':
        count += 5;
          break;
        case 'other':
        count += 5;
          break;
        case 'eww':
        count += 0;
          break;
      }

      // debugger


  }

  theEnd.addEventListener('click', (event) => {
    ansCount();
    result.innerHTML = count;
    event.preventDefault();
    console.log(count);

  })

});
