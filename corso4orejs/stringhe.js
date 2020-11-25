//Stringhe ---------------

const nome = 'Geraldo';
let risultato ;

//length conta quanti caratteri nella variabile (PARTENDO DA 1 e non d 0)
risultato = nome.length
//toUpperCase() trasforma stringa in maisuscolo
risultato = nome.toUpperCase();
//toLowerCase() trasforma stringa in maisuscolo
risultato = nome.toLowerCase();
//[]  prende la 2 lettera !IN QUESTO CASO! (CONTANDO DALLO ZERO)
risultato = nome[2];
//indexOf() L'inverso del [], mettiamo la lettera e ci indica in che numero di ordine si trova
risultato = nome.indexOf('e')
//charAt() Come nelle []
risultato = nome.charAt(3);
//substring() Definisci da che punto della variabile stampare a che punto
risultato = nome.substring(0, 4);


console.log(risultato);