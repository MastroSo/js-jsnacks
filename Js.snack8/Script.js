var numUtente = prompt('inserisci un n di 4 cifre');

var somma = 0;
console.log(numUtente);

for (var i = 0; i < numUtente.length; i++) {
  // console.log(numUtente[i]);
  console.log(parseInt(numUtente[i]));
  somma += parseInt(numUtente[i]);
}

console.log(somma);