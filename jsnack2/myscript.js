// JSnack 2
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.


const myArray = [(Math.floor(Math.random()*9)+1)];

let N = prompt('inserisci un numero');


for(let i=0; i < 10; i++){
    myArray.push(Math.floor(Math.random()*100)+1);
    console.log(myArray)

}