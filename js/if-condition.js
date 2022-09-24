let a = 10;

a<10?console.log(10):(a>=10&&a <= 40)?console.log("10 To 40"):a>40?console.log("> 40"):console.log("Unknown");
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// }

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

if(st.repeat(2).length.toString()==="34"){
    console.log("Good");
}
//Position May Change
if (st.charAt(st.length-10).toLowerCase() === "w") {
  console.log("Good");
}

if (typeof st.length!== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}