
const prompt = require('prompt-sync')({ sigint: true });
let number = prompt('Enter a number: ');
const multiplyByThree = (number) => number * 3;
const multiplyByTwo = (number) => {
    return number*2
}

console.log(multiplyByTwo(number));
console.log(multiplyByThree(number));