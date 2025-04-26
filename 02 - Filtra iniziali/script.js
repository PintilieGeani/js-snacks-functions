/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const lettera = "a"

// Dichiara la funzione qui.
function filter (namesArray, letter){
    let filtrato = []
    let letterUpper = letter.toUpperCase()
    for(let i = 0; i < namesArray.length; i++){
        let curElement = namesArray[i]
        if(curElement[0] === letterUpper){
            filtrato.push(curElement)
        }
    }
    return filtrato
}

// Invoca la funzione qui e stampa il risultato in console
const result = filter(names, lettera)
console.log(result)


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]