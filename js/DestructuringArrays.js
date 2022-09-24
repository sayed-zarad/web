/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/
/*
let a = 1;
let b = 2;
let c = 3;
let d = 4;



[a="A",b,c,d,e="osama"]=myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
// console.log(myFriends[4])

let [x,y,,z]=myFriends;
console.log(x)
console.log(y)
console.log(z)
*/
// ********************
/*
  Destructuring
  - Destructuring Array Advanced Examples
*/
/*
let myFriends = ["ahmed","sayed","ali",["shady","amr",["mohamed","gamal"]]];
// console.log(myFriends[3][2][1])
let [, , , [a , , [, b]]]=myFriends;

console.log(a)
console.log(b)
*/
// ***********************
/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

/*
let book = "video";
let video = "book";

// save book value in stash
//let stash = book 
//book = video
//video = stash

[book,video]=[video,book];

console.log(book)
console.log(video)
*/
// *********************
/*
  Destructuring
  - Destructuring Object
*/
/*
let user  = {
  theName:"osama",
  theAge:39,
  theTitle:"devolper",
  theCountry:"egypt"
};
// console.log(user.theName)
// console.log(user.theAge)
// console.log(user.theTitle)
// console.log(user.theCountry)

// let theName = user.theName
// let theAge = user.theAge
// let theTitle = user.theTitle
// let theCountry = user.theCountry

// ({theName,theAge,theTitle,theCountry}=user);
let {theName,theAge,theCountry}=user;
console.log(theName);
console.log(theAge);
// console.log(theTitle);
console.log(theCountry);
*/
// **********************
/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/
/*
let user  = {
  theName:"osama",
  theAge:39,
  theTitle:"devolper",
  theCountry:"egypt",
  theColor:"black",
  skills : {
    html : 70,
    css:80
  }
};
let {theName:n,theAge:a,theCountry,theColor:co="red",skills:{html:h,css}}=user;
console.log(n);
console.log(a);
// console.log(theTitle);
console.log(theCountry);
console.log(co);
console.log(`my html progress is ${h}`)
console.log(`my css progress is ${css}`)

let {html:skillOne, css:skillTwo}=user.skills
console.log(`my html progress is ${skillOne}`)
console.log(`my css progress is ${skillTwo}`)
*/
// ********************
/*
  Destructuring
  - Destructuring Function Parameters
*/
/*
let user  = {
  theName:"osama",
  theAge:39,
  theTitle:"devolper",
  theCountry:"egypt",
  theColor:"black",
  skills : {
    html : 70,
    css:80
  }
};
showDetails(user)
// function showDetails(obj){
//   console.log(`ur namr is ${obj.theName} `)
//   console.log(`ur age is ${obj.theAge} `)
//   console.log(`ur title is ${obj.theTitle} `)
//   console.log(`ur countery is ${obj.theCountry} `)
//   console.log(`ur css skill  is ${obj.skills.css} `)
// }

function showDetails({theName:n,theAge:a,theTitle:t,theCountry:c,skills:{css:s}}=user){
  console.log(`ur namr is ${n} `)
  console.log(`ur age is ${a} `)
  console.log(`ur title is ${t} `)
  console.log(`ur countery is ${c} `)
  console.log(`ur css skill  is ${s} `)
}
*/
// ************************
/*
  Destructuring
  - Destructuring Mixed Content
*/
/*
const user = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

let {theName:n,theAge:a,skills:[one,,three],addresses:{egypt:e}}=user

console.log(`your name is ${n}`)
console.log(`your ahe is ${a}`)
console.log(`your skills is ${one},${three}`)
console.log(`your adress is ${e}`)
*/
// **********************
/*
  Destructuring
  - Challenge
*/

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen === 1){
  let [{title,age,available,skills:[one,two]},  , ]=myFriends
  if(available===true){
    console.log(`ur name is ${title}`)
    console.log(`ur age is ${age}`)
    console.log(`ur skills are ${one},${two}`)
  }
  else{
    console.log(`ur name is ${title}`)
    console.log(`ur age is ${age}`)
    console.log(` iam not avilable `)
    console.log(`ur skills are ${two}`)
  }
}

if (chosen === 2){
  let [, {title,age,available,skills:[,two]} , ]=myFriends
  if(available===true){
    console.log(`ur name is ${title}`)
    console.log(`ur age is ${age}`)
    console.log(` iam avilable `)
    console.log(`ur skills are ${two}`)
  }
  else{
    console.log(`ur name is ${title}`)
    console.log(`ur age is ${age}`)
    console.log(`iam not avilable `)
    console.log(`ur skills are ${two}`)
  }
  
}

if (chosen === 3){
  let [,  ,{title,age,available,skills:[one,two]} ]=myFriends
  if(available===true){
    console.log(`ur name is ${title}`)
    console.log(`ur age is ${age}`)
    console.log(`ur skills are ${one},${two}`)
  }
  else{
    console.log(`ur name is ${title}`)
    console.log(`ur age is ${age}`)
    console.log(` iam not avilable `)
    console.log(`ur skills are ${two}`)
  }
}
