/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function iniziali (arrayNomi){
    let inizialiArray = []
    for(let i = 0; i < arrayNomi.length; i++){
        let curElement = arrayNomi[i]
        inizialiArray.push(curElement[0])
    }
    return inizialiArray
}

// Invoca la funzione qui e stampa il risultato in console
const result = iniziali(names)
console.log(result)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
