var numeroUno = parseInt(prompt('inserisci un numero'));
console.log(numeroUno);
var numeroDue = parseInt(prompt('Bene, inserisci un altro numero'));
console.log(numeroDue);
if (numeroUno > numeroDue){
  console.log(numeroUno);
}
else if ( numeroDue > numeroUno){
  console.log(numeroDue);
}
else if (isNaN(numeroUno) || isNaN(numeroDue)){
  console.log('Numero non inserito');
}
else {
  console.log('hai inserito due volte lo stesso numero');
}