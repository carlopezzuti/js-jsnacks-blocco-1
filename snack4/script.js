// Calcola la somma e la media dei primi 10 numeri.

let average = 0;
let sum = 0;

for(let i = 1; i < 11; i++) {
    sum += i;
    average = sum / 10;
}

console.log(sum);
console.log(average);