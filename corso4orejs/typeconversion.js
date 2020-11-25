//TYPE CONVERSION


//1. Numero e Stringa

let valore;

valore = string(5);

//2. Boolean a Stringa

valore = string(true);

//3. toString

valore = (5).toString;

//4. Stringa a Numero

valore = Number('5');

//5. Boolean a Numero

valore = Number(false);  //JS TRADUCE FALSE IN 0 INVECE TRUE IN 1
valore = Number(true);

//6. Stringa a Numero

valore = parseInt('100.3');  //parseInt trasforma numero in integrale
valore = parseFloat('100.3'); //parseFloat trasforma numero in decimale






console.log(valore);
console.log(typeof valore);