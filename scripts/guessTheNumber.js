const prompt = require('prompt-sync')({ sigint: true });
const randomNumber = Math.floor(Math.random() * 100) + 1; 
let attemptsLeft = 5; 
let guessedCorrectly = false;

while (attemptsLeft > 0 && !guessedCorrectly) {
    const userGuess = parseInt(prompt(`Il vous reste ${attemptsLeft} essais. Devinez un nombre :`));

    if (isNaN(userGuess)) {
        console.log("Veuillez entrer un nombre valide.");
        continue; 
    }
    
    if (userGuess === randomNumber) {
        console.log("Félicitations ! Vous avez deviné le bon nombre !");
        guessedCorrectly = true; // 
    } else {
        if (userGuess < randomNumber) {
            console.log("Le nombre à deviner est plus grand.");
        } else {
            console.log("Le nombre à deviner est plus petit.");
        }
        attemptsLeft--; 
    }
}

if (!guessedCorrectly) {
    console.log(`Désolé, vous avez épuisé vos essais. Le nombre à deviner était : ${randomNumber}`);
}

console.log("Merci d'avoir joué !");
