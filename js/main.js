
// Chiedere all'utente quanti chilometri ha intenzione di percorrere

const kmToDo = prompt('Quanti chilometri vuoi percorrere?');
console.log(kmToDo);

// Chiedere all'utente quanti anni ha

const myAge = prompt('Quanti anni hai?');
console.log(myAge);

// Definire il prezzo pieno del biglietto

const fullPrice = kmToDo * 0.21;

// dichiarare variabile prezzo finale

let finalPrice;

// calcolare il prezzo scontato del biglietto in relazione all'età 
// e alla fascia di sconto cui appartiene 

if (myAge < 18) {
    finalPrice = (fullPrice * 80) / 100;

} else if (myAge > 65) {
    finalPrice = ((fullPrice * 60) / 100);

} else {
    finalPrice = fullPrice;
}

// ridurre la cifra ottenuta ad un valore 
// con massimo due decimali

finalPrice.toFixed(2);
console.log(finalPrice.toFixed(2));




