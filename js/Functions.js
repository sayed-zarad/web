function add(num){
    return num +2;
}
let res = add(5);
console.log(res);
// *******************************
function greet(firstName, lastName, honorific, greeting) {
    return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
}

  console.log(greet("Brian", "Holt", "Lord", "Salutations"));
// ***********************************
const myHomeCity = "Salt Lake City";
const myHomeState = "Utah";
const myHomeCountry = "USA";

function logOutYourHome(city, state, country) {
  console.log(`You are from ${city}, ${state} ${country}.`);
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);
// *****************************
// اتنين و خميس 11 ل 1

const A = "A";
let F;

function doStuff(B) {
  console.log(B); //work
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  //console.log(D); //not
  console.log(H); // work
  F = "F"; 
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A); //work
  const G = "G";
}
console.log(E); //work
//console.log(G); //not

doStuff("B");
//console.log(B); //not
//console.log(C); //not
console.log(F); //work

// ****************************
const sentence = "ThIs HaS wEiRd CaSiNg On It";
console.log(sentence.toLowerCase())
console.log(sentence.toUpperCase())
// ********************
console.log(Math.round(5.1))
console.log(sentence.substring(3,6))
// *****************************