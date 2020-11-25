// ARRAY - Struttura di dati

//ESEMPIO

//profilo Facebook - 40 amici

const amico1 = 'Marco';             //Approccio Errato
const amico2 = 'Luca';

//lista amici andrea
                                    //Approccio Corretto

const amiciMiei = ['Marco', 'Luca', 'Andrea']; //questo un array

console.log(amiciMiei.length)  //chiede alla console quanto è lungo l'array

const mix = ['stringa', 45, true, false, ['frutta'], {}]



//ARRAYS - METODI

const colori = ['blu',  'rosso', 'verde']

//push ci permette di aggiumgere un elemento alla fine dell'array

colori.push('rosa');

//pop togliere l'ultimo elemento dell'array

colori.pop();

//unshift inserisce un nuovo elemento all'inizio dell'array

colori.unshift();

//shift rimuove il primo elemento dall'array

colori.shift();

//indexof ci da l'indice di un elemento

colori.indexOf('blu');

//slice prende un o più elementi (per esempio dal 0 a 2) dal nostro array

const nuovo = colori.slice(0, 2);

//concat per unire più array

const arr1 = ['facebook', 'instagram'];
const arr2 = ['Gta', 'Thewitcher'];

arr1.concat(arr2);
