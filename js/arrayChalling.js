/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

my.pop();
my.sort();
let s = my.indexOf("Gamal");
my.splice(s, 1);
my.reverse();
my.splice(1,1,"Elham");
my.splice(2,1,"Mazero");
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero,counter)); // ["Elham", "Mazero"]
my.push("Elzero")
console.log(my[my.length-1]); // "Elzero"

console.log(my[--counter].slice(4,6)); // "rO"