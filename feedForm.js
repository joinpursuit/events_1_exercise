document.addEventListener('DOMContentLoaded', () => {

    let finished = document.querySelector(".finished")
    let place = document.querySelector(".place")
    let sleep = document.querySelector(".sleepConditions")
    let food = document.querySelector(".food")
    let animal = document.querySelector(".animalOutcome")

    const animalCountObj = {
        "Manhattan Flying Rat": 0,
        "Bronx Rat": 0,
        "Brooklyn Squirrel": 0,
        "Staten Island Turtle": 0
    }

    function animalCounter () {
        switch (place.options[place.selectedIndex].value) {
            case "train": 
                animalCountObj['Bronx Rat']++;
                break;
            case "plane": 
                animalCountObj['Manhattan Flying Rat']++;
                break;
            case "tree": 
                animalCountObj['Brooklyn Squirrel']++;
                break;
            case "bath": 
                animalCountObj['Staten Island Turtle']++;
                break;
        }
        switch (sleep.options[sleep.selectedIndex].value) {
            case "hotWet": 
                animalCountObj['Bronx Rat']++;
                break;
            case "coldDry": 
                animalCountObj['Manhattan Flying Rat']++;
                break;
            case "coolDry": 
                animalCountObj['Brooklyn Squirrel']++;
                break;
            case "coldWet": 
                animalCountObj['Staten Island Turtle']++;
                break;
        }
        switch (food.options[food.selectedIndex].value) {
            case "cheese": 
                animalCountObj['Bronx Rat']++;
                break;
            case "bread": 
                animalCountObj['Manhattan Flying Rat']++;
                break;
            case "nuts": 
                animalCountObj['Brooklyn Squirrel']++;
                break;
            case "seaweed": 
                animalCountObj['Staten Island Turtle']++;
                break;
        }
    }

    function chosenAnimal () {
        let countArr = Object.keys(animalCountObj);
        let animalResult = countArr.reduce((acc, currentKey) => {
            if (animalCountObj[acc] > animalCountObj[currentKey]) {
                acc = acc;
            } else {
                acc = currentKey;
            }
            return acc;
        });

        return animalResult;
    }

    function resetAnimalCount () {
       let reset = Object.keys(animalCountObj).forEach((key) => {
            animalCountObj[key] = 0
        });
        return reset;
    }

    finished.addEventListener('click', (event) => {
        animalCounter();
        animal.innerHTML = `You are a ${chosenAnimal()}`;
        event.preventDefault();
        resetAnimalCount();
    })
    
})