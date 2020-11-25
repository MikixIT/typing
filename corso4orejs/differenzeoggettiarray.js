//OGGETTI vs ARRAY


//OGGETTI
const persona = {
    nome: 'Michael' 
}

persona.nome; //creare oggetto

persona['nome']; //entrare nel suo valore

persona.cognome = 'Torres'; //aggiungere proprietà

persona.cognome = 'Nuovo Torres'//modificare

delete persona.nome;  //come cancellare oggetti

console.log(persona);

//ARRAY

const persone = ['billy', 'ballo']; //creare array

persone[0]//entrare nel suo valore

persone[0] = ['billy 2', 'balloperdue'] //modificare


persone.push('ballo2') //aggiungere 

persone.pop();   //cancellare voce array

console.log(persone);