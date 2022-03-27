var contenitore = [];
console.log(contenitore);
for (i = 0; i < 6; i++) {
  var numUtente = parseInt(prompt('inserisci un numero'));
  console.log(numUtente);
  // se non è un numero glielo richiedo
  while(isNaN(numUtente)) {
 numUtente = parseInt(prompt('Non hai inserito un numero. inserisci un numero'));
  }
  if (numUtente % 2 != 0) {
    contenitore.push(numUtente);
  }
}
console.log(contenitore);