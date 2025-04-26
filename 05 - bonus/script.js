/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function saluta (nome){
    const data = new Date
    const ora = data.getHours()
    let saluto = ""
    if(ora <= 13){
        saluto = `Buongiorno, ${nome}`
    }if(ora > 13){
        saluto = `Buon pomeriggio, ${nome}`
    } else {
        saluto = `Buonasera, ${nome}`
    }
    return saluto
} 

// Invoca la funzione qui e stampa il risultato in console

const result = saluta(name)
console.log(result)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
