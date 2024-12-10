const prompt = require('prompt-sync')({sigint : true}); 
let a = parseInt( prompt('donner une permier nombre: '));
let b = parseInt(prompt('donner une deuxième nombre: '));

let somme = a + b
console.log(`La somme de ${a} et ${b} est égale à ${somme}`)
let difference = a - b

console.log(`La différence de ${a} et ${b} est égale à ${difference}`)
let produit = a * b  

console.log(`Le produit de ${a} et ${b} est égale à ${produit}`)
let quotient = a / b

console.log(`Le quotient de ${a} et ${b} est égale à ${quotient}`)   