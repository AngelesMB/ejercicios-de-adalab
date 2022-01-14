// modificamos una variable de ámbito global
let secretLetter = "y";

function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x" porque ya la hemos modificado al llamar a la función

let secretLetter2 = "a";

function mySecretLetter2() {
  secretLetter2 = "b";
  return secretLetter2;
}
console.log(secretLetter2); //devuelve "a" porque aún no hemos llamada a la función que la cambia
console.log(mySecretLetter2()); // devuelve "b"
