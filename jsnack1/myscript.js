// JSnack 1
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli
//  nell’array fino a quando la somma degli elementi è minore di 50.

const myArray = [] 
let somma = 0; 
let cont = 0; 

while(somma < 50){
    let numero = parseInt(prompt('inserisci un numero'));
    myArray.push(numero);
    somma += myArray[cont];
    cont++;
    console.log(somma);
}
