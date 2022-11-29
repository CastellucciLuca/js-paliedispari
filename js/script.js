// Palidroma
// Chiedere all’utente di inserire una parola:
// Creare una funzione per capire se la parola inserita è palindroma
const word = prompt('Inserisci una parola'); //Parola palindroma: ANNA

function checkPalindrome(string) {

const wordPalindrome = string.length;

//SCORRO LETTERE PER VEDERE LA LORO LUNGHEZZA
for (let i = 0; i < wordPalindrome / 2; i++) {

// CONTROLLO SE LA PRIMA LETTERE E' UGUALE ALL'ULTIMA
    if (string[i] != string[wordPalindrome - (i + 1)]) {
    return 'Non è palindroma';
        }
    }
return 'È palindroma';
}

const result = checkPalindrome(word);

console.log (result);