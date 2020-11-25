//OPERATORI LOGICI

// AND &&

//SERVE PER DARE UN'ALTRA CONDIZIONE 
//DENTRO IFELSE E DEVONO ESSERE ENTRAMBI VERE

const Michael = 22;

if (Michael > 3 && Michael < 8) {
    console.log('Michael NON HA meno di 3 non più di 8')
    
} else { 
    console.log('Michael Ha Meno di 3 e più di 8')
    
};


// OR ||

//SERVE PER DARE UN'ALTRA CONDIZIONE 
//DENTRO IFELSE SOLO UNA CONDIZIONE DEVE ESSERE VERA

const eta = 103;

if (eta < 3 || eta > 99) {
    console.log('posso giocare')
} else {
    console.log('non posso giocare')
}

// NOT  !   SERVE PER DIRE CHE NON DEVE ESSERE UGUALE
// SE NON E' UGUALE A 100 E' FALSO IN QUESTO CAS0 
// QUINDI IL RISULTATO "Non è 100"

const persone = 100;

if (persone !== 100) {
    console.log('è 100')
} else {
    console.log('Non è 100')
}


//Ternary Operator      
//E' LO STESSO DI IF ELSE, è SOLO UN ALTRO METODO PER FARE LA STESSA COSA
//IN UNA SOLA RIGA

const id = 100;

id === 100 ? console.log('id è 100') : console.log('id NON è 100')