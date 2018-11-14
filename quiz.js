document.addEventListener("DOMContentLoaded", () => {

let changes = document.querySelector(".pokemon")
let button = document.querySelector(".quizit")
button.addEventListener('click', () =>{

    let ques1 = document.quiz.color.value;
    let ques2 = document.quiz.morning.value;
    let ques3 = document.quiz.weather.value;

    if((ques1 === "Red" && ques2 === "No") && (ques3 === "Sunny")){
      changes.style.backgroundImage = "url('http://static.pokemonpets.com/images/monsters-images-300-300/126-Magmar.png')"
    }

    if((ques1 === "Red" && ques2 === "Yes") && (ques3 === "Sunny")){
      changes.style.backgroundImage = "url('https://miro.medium.com/max/424/1*Hxptm5gIRc3HyYXzw5nfpw.png')"
    }

    if((ques1 === "Red" && ques2 === "Yes") && (ques3 === "Rainy")){
      changes.style.backgroundImage = "url('https://vignette.wikia.nocookie.net/pokemon/images/5/5b/129Magikarp_OS_anime_2.png/revision/latest?cb=20150101075047')"
    }

    if((ques1 === "Red" && ques2 === "No") && (ques3 === "Rainy")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/4/41/382Kyogre.png/1200px-382Kyogre.png')"
    }

    if((ques1 === "Red" && ques2 === "No") && (ques3 === "Breezy")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/1/1b/146Moltres.png/250px-146Moltres.png')"
    }

    if((ques1 === "Red" && ques2 === "Yes") && (ques3 === "Breezy")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/6/67/250Ho-Oh.png/1200px-250Ho-Oh.png')"
    }

    if((ques1 === "Red" && ques2 === "No") && (ques3 === "Cold")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/d/d2/461Weavile.png/1200px-461Weavile.png')"
    }

    if((ques1 === "Red" && ques2 === "Yes") && (ques3 === "Cold")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/3/3f/225Delibird.png/250px-225Delibird.png')"
    }

    if((ques1 === "Blue" && ques2 === "Yes") && (ques3 === "Rainy")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png')"
    }

    if((ques1 === "Blue" && ques2 === "No") && (ques3 === "Rainy")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/9/98/318Carvanha.png/250px-318Carvanha.png')"
    }

    if((ques1 === "Blue" && ques2 === "No") && (ques3 === "Sunny")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/4/47/157Typhlosion.png/250px-157Typhlosion.png')"
    }

    if((ques1 === "Blue" && ques2 === "Yes") && (ques3 === "Sunny")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/9/9b/155Cyndaquil.png/250px-155Cyndaquil.png')"
    }

    if((ques1 === "Blue" && ques2 === "Yes") && (ques3 === "Breezy")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/d/da/334Altaria.png/250px-334Altaria.png')"
    }

    if((ques1 === "Blue" && ques2 === "No") && (ques3 === "Breezy")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/4/41/373Salamence.png/1200px-373Salamence.png')"
    }

    if((ques1 === "Blue" && ques2 === "No") && (ques3 === "Cold")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/4/4e/144Articuno.png/250px-144Articuno.png')"
    }

    if((ques1 === "Blue" && ques2 === "Yes") && (ques3 === "Cold")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/a/ab/131Lapras.png/250px-131Lapras.png')"
    }

    if((ques1 === "Green" && ques2 === "No") && (ques3 === "Breezy")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/e/e4/384Rayquaza.png/250px-384Rayquaza.png')"
    }

    if((ques1 === "Green" && ques2 === "Yes") && (ques3 === "Breezy")){
      changes.style.backgroundImage = "url('https://img.rankedboost.com/wp-content/plugins/ice/pokemon/Shaymin-Sky-Forme-Pokemon-Go.png')"
    }

    if((ques1 === "Green" && ques2 === "No") && (ques3 === "Sunny")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/c/c6/322Numel.png/250px-322Numel.png')"
    }

    if((ques1 === "Green" && ques2 === "Yes") && (ques3 === "Sunny")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/d/de/286Breloom.png/250px-286Breloom.png')"
    }

    if((ques1 === "Green" && ques2 === "No") && (ques3 === "Cold")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/3/3b/460Abomasnow.png/250px-460Abomasnow.png')"
    }

    if((ques1 === "Green" && ques2 === "Yes") && (ques3 === "Cold")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/d/d2/459Snover.png/250px-459Snover.png')"
    }

    if((ques1 === "Green" && ques2 === "No") && (ques3 === "Rainy")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/f/f6/283Surskit.png/1200px-283Surskit.png')"
    }

    if((ques1 === "Green" && ques2 === "Yes") && (ques3 === "Rainy")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/f/ff/272Ludicolo.png/250px-272Ludicolo.png')"
    }

    if((ques1 === "Yellow" && ques2 === "No") && (ques3 === "Breezy")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/e/e3/145Zapdos.png/250px-145Zapdos.png')"
    }

    if((ques1 === "Yellow" && ques2 === "Yes") && (ques3 === "Breezy")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/b/b6/415Combee.png/250px-415Combee.png')"
    }

    if((ques1 === "Yellow" && ques2 === "Yes") && (ques3 === "Rainy")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/9/9b/171Lanturn.png/250px-171Lanturn.png')"
    }

    if((ques1 === "Yellow" && ques2 === "No") && (ques3 === "Rainy")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/5/53/054Psyduck.png/1200px-054Psyduck.png')"
    }

    if((ques1 === "Yellow" && ques2 === "Yes") && (ques3 === "Cold")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/6/6b/361Snorunt.png/250px-361Snorunt.png')"
    }

    if((ques1 === "Yellow" && ques2 === "No") && (ques3 === "Cold")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/7/7c/124Jynx.png/250px-124Jynx.png')"
    }

    if((ques1 === "Yellow" && ques2 === "Yes") && (ques3 === "Sunny")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/c/c5/479Rotom.png/1200px-479Rotom.png')"
    }

    if((ques1 === "Yellow" && ques2 === "No") && (ques3 === "Sunny")){
      changes.style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/6/60/467Magmortar.png/250px-467Magmortar.png')"
    }


})


})
