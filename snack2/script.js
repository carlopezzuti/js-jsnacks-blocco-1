// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0;

for(let i = 0; i < 5; i++) {
    const userNumber = parseInt(prompt("Inserisci un numero"));

    sum = sum + userNumber;
}
console.log(sum);