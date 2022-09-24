/*
BOM [Browser Object Model]
    - Introduction
    --- Window Object Is The Browser Window
    --- Window Contain The Document Object
    --- All Global Variables And Objects And Functions Are Members Of Window Object
    ------ Test Document And Console
    - What Can We Do With Window Object ?
    --- Open Window
    --- Close Window
    --- Move Window
    --- Resize Window
    --- Print Document
    --- Run Code After Period Of Time Once Or More
    --- Fully Control The URL
    --- Save Data Inside Browser To Use Later
*/

//window.console.log("good")
// window.document.title="hello js"
// **********************
/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/
// alert("hello")
// console.log("test")
// let confirnMessage=confirm("are u sure?")
// if (confirnMessage===true){
//     console.log("item deleted")
// }
// else{
//     console.log("item didnt delet")

// }
// let preomptMessage=prompt("good day for u ?","write day with 3 char like 'sat'")
// console.log(preomptMessage)
// ************************
/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/
// setTimeout(function(){
//     console.log("message")
// },3000)

// setTimeout(sayMes,3000)

// function sayMes(){
//     console.log("iam message")
// }

// setTimeout(sayMes,3000,"osama",35)

// function sayMes(user,age){
//     console.log(`iam message for ${user} his age is ${age} `)
// }


// let counter = setTimeout(sayMes,3000)

// function sayMes(){
//     console.log(`iam message  `)
// }
// let btn = document.querySelector("button")
// btn.onclick=function(){
//     clearTimeout(counter)
// }
// ********************

/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
*/
// setInterval(function(){
//     console.log(`msg`)
// },1000)

// setInterval(sayMsg,1000)
// function sayMsg(){
//     console.log(`iam message`)
// }


// let div = document.querySelector("div")

// function countDown(){
//     div.innerHTML-=1
//     if(div.innerHTML==="0"){
//         clearInterval(counter)
//         console.log("finsh")
//     }
// }
// let counter = setInterval(countDown,1000)

// *************************
/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/
// console.log(location)
// console.log(location.href)
// location.href="https://google.com"
// location.href="/#sec02"
// console.log(location.host)
// console.log(location.hostname)
// console.log(location.protocol)
// location.hostname="google.com"

// console.log(location.hash)

// window.location.reload()

// location.replace()

// ******************
/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/
// setTimeout(function(){
//   window.open("https://google.com","_blank","width=400,height=400,left=200,top=100")
// },2000)
// ***************
/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/
// console.log(history)

// ********************
/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/
// let myNewWindow=window.open("https://google.com","","width=500,height=500")
// window.scrollTo({
//   left:500,
//   top:200,
//   behavior:"smooth"
// })
// ******************
/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/
// console.log(window.scrollX===window.pageXOffset)
/*
let btn = document.querySelector("button")
window.onscroll=function(){
  if(window.scrollY>=600){
    btn.style.display="block"
  }
  else{
    btn.style.display="none"
  }
}
btn.onclick=function(){
  window.scrollTo({
    left:0,
    top:0,
    behavior:"smooth"
  })
}
*/
// ***************
/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/
/*
// set
window.localStorage.setItem("color","blue")
window.localStorage.fontWeight="bold"
window.localStorage["fontSize"]="20px"

// get
console.log(window.localStorage.getItem("color"))
console.log(window.localStorage.color)
console.log(window.localStorage["color"])

// remove one 
window.localStorage.removeItem("color")

// clear all
window.localStorage.clear()

// get key
console.log(window.localStorage.key(1))

// set color in page
document.body.style.backgroundColor=window.localStorage.getItem("color")

console.log(window.localStorage)
console.log(typeof window.localStorage)
*/
// ***************
/*
  BOM [Browser Object Model]
  Local Storage Practice
*/
/*
let lis=document.querySelectorAll("ul li")
let div = document.querySelector(".experiment")

if(window.localStorage.getItem("color")){ //if color exist in local storage
  // 1 add color to div
  div.style.backgroundColor=window.localStorage.getItem("color")
   // 2 remnove active class from all lis
   lis.forEach((li)=>{
    li.classList.remove("active")
  })
  // 3 add active class to current color
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")

}

lis.forEach((li)=>{
  li.addEventListener("click",(e)=>{
    // console.log(e.currentTarget.dataset.color)
    // remnove active class
    lis.forEach((li)=>{
      li.classList.remove("active")
    })
    // add active class to current element
    e.currentTarget.classList.add("active")
    // add color to local storage
    window.localStorage.setItem("color",e.currentTarget.dataset.color)
    //change div back groundcolor
    div.style.backgroundColor=window.localStorage.getItem("color")
  })
})
*/