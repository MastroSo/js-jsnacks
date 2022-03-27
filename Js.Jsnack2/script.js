var parolaUno = prompt('inserisci una parola');
console.log(parolaUno);
var parolaDue = prompt('Bene, inserisci un altra parola');
console.log(parolaDue);
if (parolaUno.length > parolaDue.length) {
  console.log('parola più corta' + ' ' + parolaDue);
  console.log('parola più lunga' + ' ' +parolaUno);
} else if (parolaUno.length < parolaDue.length) {
  console.log('parola più corta' + ' ' + parolaUno);
  console.log('parola più lunga' + ' ' + parolaDue);
} else {
  console.log('hai inserito parole della stessa lunghezza');
}