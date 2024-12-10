const operation = (a,b,operator) => {
    return operator(a,b);
}

const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;
const add = (a,b) => a+b;
const substract = (a,b) => a-b;
const puissance = (a, b) => Math.pow(a, b);
const reste = (a, b) => a % b;

console.log(operation(5, 2, multiply)); 
console.log(operation(5, 2, divide));
console.log(operation(5, 2, add));
console.log(operation(5, 2, substract));
console.log(operation(5, 2, puissance));
console.log(operation(5, 2, reste));