// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un"altra funzione
// Dichiariamo chi ha vinto.

let userChoise;
let userNumber;

do{
userChoise = prompt('Scegli "pari" o "dispari"');
} while ((userChoise != "pari") && (userChoise != "dispari"));

do{
userNumber = parseInt(prompt("Scegli un numero tra 1 e 5"), 10);
} while ((userNumber < 1) || (userNumber > 5 ));


const uiNumber = getRandomNumber(1, 5);

console.log(`Hai scelto ${userChoise}`,`e il numero ${userNumber}`);
console.log(`Il Computer ha scelto ${uiNumber}`);

const calcWin = uiNumber + userNumber;

const calcWinResult = checkWin(calcWin,userChoise);

console.log(calcWinResult);

// FUNZIONE ----------------------------------------------------------------------------------
function getRandomNumber(startNumber, endNumber){
const randomNumber = Math.floor(Math.random() * (endNumber - startNumber + 1) + startNumber);
    return parseInt((randomNumber), 10);
}

function checkWin(uNumber,uChoise){
    if ((uNumber % 2 == 0) && (uChoise == 'pari')){
    return ("Vittoria!");
    } else if ( (uNumber % 2 == 1) && (uChoise == 'dispari')){
    return ("Vittoria!");
    } else{
    return ("YOU LOOSE!");
    }
}