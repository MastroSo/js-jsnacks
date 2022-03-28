let arrayEsponenti=[];
let n=parseInt(prompt("Inserisci numero"));
let numeri=cuboNumeri(n);
function cuboNumeri(risultato){
    while(risultato > 0){
        esponenziale= Math.pow( risultato , 3);
        console.log(esponenziale);
        arrayEsponenti.push(esponenziale);
        risultato--;
    }
}
alert(arrayEsponenti);