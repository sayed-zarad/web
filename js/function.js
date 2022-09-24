//age = age || "unKnown"; //لو مش مديني قيمه للبراميتر هيحط القيمه اللي بعد الاور 
// *****************
// let sum =0
// function calc(...numbers){
//     for (let i=0;i<numbers.length;i++){
//         console.log(numbers[i])
//         sum+=numbers[i]
//     }
//     console.log(sum)
// }

// calc(10,20,30,40,50)
// ********************

/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

/*
function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
    document.write(`<div>`);
    document.write(`<h2>Welcome, ${us}</h2>`);
    document.write(`<p>Age: ${ag}</p>`);
    document.write(`<p>Hour Rate: $${rt}</p>`);
    if (show === "Yes") {
      if (sk.length > 0) {
        document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
      } else {
        document.write(`<p>Skills: No Skills</p>`);
      }
    } else {
      document.write(`<p>Skills Is Hidden</p>`);
    }
    document.write(`</div>`);
  }
  
  showInfo("Osama", 38, 20,"Yes", "Html", "CSS");
*/

// ***********************
/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

/* function showDetails(first,second,third){
    let name,old,Case;
   typeof(first) =="string"?name=first:typeof(first) =="number"?old=first:Case=first;
   typeof(second) =="string"?name=second:typeof(second) =="number"?old=second:Case=second;
   typeof(third) =="string"?name=third:typeof(third) =="number"?old=third:Case=third;

    Case==true?console.log(`Hello ${name}, Your Age Is ${old}, You Are Available For Hire`):
    console.log(`Hello ${name}, Your Age Is ${old}, You Are Not Available For Hire`)
}
console.log(typeof(true))
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
 showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
*/ 
// ************************
// document.getElementById("show").onclick=function(){
//   console.log("Show");
// }

// setTimeout(function(){
//   console.log("good");
// },2000)
// ***************
//arrow function
// let print =(num)=>{
//   return num;
// }
// console.log(print(100))
// *************
// higher order function
let myNums=[1,2,3,4,5]
// let addSelf=myNums.map(function(element){
//   return element+element
// },10);
// ***************
// let addSelf=myNums.map((element)=> element+element
// );
// console.log(addSelf)
/*
function addition(ele){
  return ele + ele
}
let add = myNums.map(addition);
console.log(add)
*/
// let swappingCases ="elZERo"

// let invertedNumbers=[1,-10,-20,15,100,-30]
// let ignoreNumbers="Elz123er4o"

// let sw=swappingCases.split("").map(function(ele){
//   return ele===ele.toUpperCase()?ele.toLowerCase():ele.toUpperCase()
// }).join("");
// console.log(sw)

// let inv =invertedNumbers.map(function(elem){
//   return -elem
// })
// console.log(inv)

// let ign=ignoreNumbers.split("").map(function(elemn){
//   return isNaN(parseInt(elemn))?elemn:""

// }).join("")
// console.log(ign)
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
// let numbers = [11, 20, 2, 5, 17, 10];
// let addMap=numbers.map(function(ele){
//   return ele+ele
// })
// console.log(addMap)
// let addFilter=numbers.filter(function(ele){
//   return ele>17
// })
// console.log(addFilter)
// *******************
// let filteredFrinds = friends.filter(function(el){
//   return el.startsWith("A")
// })
// console.log(filteredFrinds)

// let evenNumbers = numbers.filter(function(elem){
//   return elem%2==0
// })
// console.log(evenNumbers)
// ***************
/*
let sentence = "I Love Foood Code Too Playing Much";
let words = sentence.split(" ").filter(function(ele){
  return ele.length<=4
}).join(" ")
console.log(words)
*/
/*
let ignoreNumbers = "Elz123er4o";
let ign = ignoreNumbers.split("").filter(function(elem){
  return isNaN(parseInt(elem))
}).join("")
console.log(ign)
*/
// let mix = "A13BS2ZX";
// let num=mix.split("").filter(function(el){
//   return !isNaN(parseInt(el))
// }).map(function(el){
//   return el * el
// }).join("")
// console.log(num)
// **********************
//reduce function 
// **********************
// let nums =[10,20,15,30]
// let add= nums.reduce(function(acc,current,index,arr){
//   return acc + current
// },5)
// console.log(add)
// ********************

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];
// let check = theBiggest.reduce(function(acc,current){
//   return current.length>acc.length?current:acc
// })
// console.log(check)
/*
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let remove=removeChars.filter(function(ele){
  return ele != "@"
}).reduce(function(acc,curr){
  return acc + curr
})
console.log(remove)
*/

// ************************
// for each function
// ************************
// let allis =document.querySelectorAll("ul li")
// let alldivs=document.querySelectorAll(".content div")

// allis.forEach(function(ele){
//   ele.onclick=function(){
//      // Remove Active Class From All Elements
//     allis.forEach(function(ele){
//       ele.classList.remove("active")
//     })
//       // Add Active Class To This Element
//     this.classList.add("active")
//       // Hide All Divs
//     alldivs.forEach(function(ele){
//       ele.style.display = "none";
//       })

//   }

// })
// *****************
/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/
/*
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// console.log(myString.split(""))
let solution = myString.split("").map(function(ele){
  return   ele == ','? "" : ele == '_' ? " ":ele 
}).filter(function(ele){
  
  return isNaN(parseInt(ele))
}).reduce(function(acc,cur,index){
  return acc+cur
})
console.log(solution)
*/
// ******************************
