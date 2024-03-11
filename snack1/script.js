// Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).
const numbersList = [];

for(let i = 0; i < 5; i++) {
    const userNumber = parseInt(prompt("Inserisci un numero"));

if (numbersList.includes(userNumber) === false)
        numbersList.push(userNumber);
   
}

console.log(numbersList);