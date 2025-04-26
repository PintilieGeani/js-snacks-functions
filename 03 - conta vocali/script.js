/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocali (parola){
    let counter = 0
    for(let i = 0; i < parola.length; i++){
       let curLetter = parola[i]
       if(curLetter === "a" || curLetter === "e" || curLetter === "i" || curLetter === "o" || curLetter === "u"){
        counter = counter + 1
       }
    } return counter
}

// Invoca la funzione qui e stampa il risultato in console

const result = vocali(word)
console.log(`La parola "${word}" contiene ${result} vocali`)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)