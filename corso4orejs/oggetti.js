//OGGETTI - Struttura di dati

const array = ['valore1', 'valore2'];

const persona = {
//Chiave  |  Valore
    nome : 'billy',
    eta : '24',
    citta : 'Roma',
    indirizzo : { città: 'Roma', Via: 'via amm. conti', NumeroCivico: 13}, 
    emaggiorenne: true ,
    coloriPreferiti: ['rosso', 'blu']
}

//prendere i valori dall'array

//metodi diversi per prendere i valori 
console.log(persona.indirizzo.città);
console.log(persona['coloriPreferiti'][0]);

