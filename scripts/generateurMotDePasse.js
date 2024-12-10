const prompt = require('prompt-sync')({ sigint: true });  
const letters = 'abcdefghijklmnopqrstuvwxyz'; 
const numbers = '0123456789'; 
const allStrings = letters + letters.toUpperCase() + numbers; 
const length = parseInt(prompt('Entrez la longueur du mot de passe souhaitée: '));

if (isNaN(length) || length <= 0) {
    console.log('Veuillez entrer une longueur valide.');
} else {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allStrings.length);  
        password += allStrings[randomIndex];
    }

    console.log(`Le mot de passe généré est: ${password}`);
}
