const prompt = require('prompt-sync')({sigint : true});
const age = parseInt(prompt('saisir votre Age: '));   

if (isNaN(age) || age <= 0) {
    console.log("Veuillez entrer un âge valide.");
} else if (age < 18) {
    console.log("Vous êtes mineur.");
} else {
    console.log("Vous êtes majeur.");
}

