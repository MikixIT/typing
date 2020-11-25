//IF ELSE

/*if (condition) {
    azione da fare
} else {

    fai questo allora
    
};
*/



/*if (true) {
    console.log('ciao') 
} else {
    console.log('Non ciao')
}
*/







// const maggioreEta = 18;

// const etaMichael = 22;

// // if (etaMichael => maggioreEta) {
// //     console.log('Michael è Maggiorenne')

// // } else {
// //     console.log('Michael è Minorenne')
    
// // }





const etaMichael = 22;

if (etaMichael < 11) {
    console.log('Michael è un Bambino')
   
} else if(etaMichael < 11 && etaMichael < 19 ) {
    console.log('Michael è un Adolescente')

}else {  
    console.log ('Michael è un Adulto')   
}

//DIFFERENZA TRA == E === NELLA CONDIZIONE |
//                                         V
//ESEMPIO CHE DIMOSTRA CHE CON == nella condizione
//considera il numero anche se dichiarato come stringa
 // == SIGNIFICA VALORE UGUALE

//ESEMPIO CHE DIMOSTRA CHE CON === nella condizione
//NON considera il numero anche se dichiarato come stringa
 // === SIGNIFICA TIPO E VALORE UGUALI         CONSIGLIATO

 const Michael = '200';

if (Michael == 200) {
    console.log('Il Numero è 200')
    
} else { 
    console.log('Il Numero NON è 200')
    
}