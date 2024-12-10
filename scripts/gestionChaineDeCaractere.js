const prompt = require('prompt-sync')({sigint : true});
const phrase = prompt('saisir une phrase svp: ');

console.log(phrase.toUpperCase());

if (phrase.includes("JavaScript")) {
    console.log("Le mot 'JavaScript' est présent dans la phrase.");
} else {
    console.log("Le mot 'JavaScript' n'est pas présent dans la phrase.");
}