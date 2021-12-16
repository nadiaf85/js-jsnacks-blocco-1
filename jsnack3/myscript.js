// JSnack 3
// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numeriArray = [1,2,3,4,5,6,7,8];

let divRed = document.createElement("div");
    document.body.appendChild(divRed);
    divRed.classList.add("red");
    

let divGreen = document.createElement("div");
    document.body.appendChild(divGreen);
    divGreen.classList.add("green");
    

divRed.style.color="red";
divGreen.style.color="green";


for(let i=0; i < numeriArray.length; i++){
    if(numeriArray[i] %2 == 0){
        divGreen.innerHTML += numeriArray[i];
        console.log('red');
    }else{
        divRed.innerHTML += numeriArray[i];
        console.log('green');
    }
    
}
