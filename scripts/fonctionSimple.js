const prompt = require('prompt-sync')({ sigint: true });

function greet(name) {
 return "Bonjour, " + name + "!";
}

let name = prompt('Quel est votre nom? ');

console.log(greet(name));