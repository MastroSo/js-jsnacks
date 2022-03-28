let arrayDieciNumeri=[0 , 1 , 2  , 3 , 4 , 5 , 6 , 7 , 8 , 9];

let somma=0;
let numeri=sommaRisultati(somma);
function sommaRisultati(sommaArray){
for(let i= 0 ; i<arrayDieciNumeri.length ; i++){
    sommaArray=sommaArray + arrayDieciNumeri[i];
}
alert("La somma dei numeri dell'array è: " + sommaArray);
}
