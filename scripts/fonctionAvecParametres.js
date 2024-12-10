const calculeTotal = (price, taxeRate = 0.2) => {
    return price + (price * taxeRate);
}

console.log(calculeTotal(100, 0.25)); 
console.log(calculeTotal(100));
