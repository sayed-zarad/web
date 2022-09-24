/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

/*
let myIdElement=document.getElementById("my-div")
let myIdTag=document.getElementsByTagName("p")
let myIdcalss=document.getElementsByClassName("my-span")
let myelement=document.querySelector(".my-span")
console.log(myIdElement)
myIdTag[1].innerHTML="test"
console.log(myIdTag[1])
console.log(myIdcalss[0])
console.log(myelement)
// myId.innerHTML="sayed"


console.log(document.title)
console.log(document.body)
console.log(document.forms[0].one.value)
console.log(document.links[1].href)
*/
// **********************
/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

/*
let myelement =document.querySelector(".js")
console.log(myelement.innerHTML)
console.log(myelement.textContent)
myelement.innerHTML="text from <span>main.js</sapn> file"
myelement.textContent="text from <span>main.js</sapn> file"

// document.images[0].src="https://google.com"
document.images[0].alt="altrnate"
document.images[0].title="picture"
document.images[0].className="im"

let myLink=document.querySelector(".link")
console.log(myLink.getAttribute("class"))
console.log(myLink.getAttribute("href"))
myLink.getAttribute("class")
myLink.getAttribute("href")
myLink.setAttribute("href","https://twitter.com")
myLink.setAttribute("title","twitter")
*/

// ***************************
/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/

/*
console.log(document.getElementsByTagName("p")[0].attributes)
let myp=document.getElementsByTagName("p")[0]
if(myp.hasAttribute("data-src")){
  if(myp.getAttribute("data-src")===""){
    myp.removeAttribute("data-src")
  }
  else{
    myp.setAttribute("data-src","new-value")
  }
  
  console.log("found")
}
else{
  console.log("not found")
}

if(myp.hasAttributes()){
  console.log("has attrubutes")
}
*/
// ********************

/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/
/*
let myElement = document.createElement("div")
let myattr = document.createAttribute("data-custom")
let myText = document.createTextNode("product one")
let myComment = document.createComment("this is div")

myElement.className="product"
myElement.setAttributeNode(myattr)
myElement.setAttribute("data-test","testing")

//append comment to element
myElement.appendChild(myComment)

// append text to element
myElement.appendChild(myText)

//append element to body
document.body.appendChild(myElement)

console.log(myElement)
*/
// *********************
/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

/*
for(let i=1;i<=100;i++){
  let myDiv=document.createElement("div")
let h3 = document.createElement("h3")
let text = document.createTextNode("hello from header"+i)
let text2 = document.createTextNode("hello from paragraphe"+i)
let p = document.createElement("p")

myDiv.className="product"
h3.appendChild(text)
p.appendChild(text2)
myDiv.appendChild(h3)
myDiv.appendChild(p)
myDiv.style.color="red"
myDiv.style.border="1px solid blue"
myDiv.style.margin="2px"
myDiv.style.padding="2px"

let s=document.body.appendChild(myDiv)

}
*/
// ***********************
/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
  */
/*
let myElement = document.querySelector("div")

console.log(myElement)
console.log(myElement.children[0])
console.log(myElement.childNodes)
console.log(myElement.childNodes[0])
console.log(myElement.firstChild)
console.log(myElement.lastChild)
console.log(myElement.firstElementChild)
console.log(myElement.lastElementChild)
*/
// ************************
/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/
/*
let mybutton = document.getElementById("btn")
mybutton.onmouseleave=function(){
  console.log("clicked")
}
window.onscroll=function(){
  console.log("scroll")
}
*/
// ********************
/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

/*
let userInput = document.querySelector("[name='username']")
let ageInput = document.querySelector("[name='age']")


document.forms[0].onsubmit=function(e){
  let userValid=false
  let ageValid=false


if(userInput.value !==""&& userInput.value.length<=10){
  userValid = true
}
if(ageInput.value!==""){
  ageValid=true
}
  if(userValid=== false || ageValid === false){
    e.preventDefault()
  }

}
document.links[0].onclick=function(event){
  console.log(event)
  event.preventDefault();
}
*/
// ****************
/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/
/*
let one = document.querySelector(".one")
let two = document.querySelector(".two")
window.onload=function(){
  two.focus();
}
one.onblur=function(){
  document.links[0].click()
}
*/
// *******************
/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

/*
let element = document.getElementById("my-div")
console.log(element.classList)
console.log(element.classList.contains("one"))
console.log(element.classList.contains("osama"))
console.log(element.classList.item(0))

element.onclick = function(){
  // element.classList.add("add-one","add-two")
  // element.classList.remove("one","two")
  element.classList.toggle("show")
}
*/
// ***************************
/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

/*
let element = document.getElementById("my-div")
// element.style.color="white"
// element.style.backgroundColor="blue"
// element.style.fontWeight="bold"

element.style.cssText="font-weight:bold;color:green;opacity:.9"

element.style.removeProperty("color")
element.style.setProperty("border","2px solid black","important")

document.styleSheets[0].rules[0].style.removeProperty("line-height")
document.styleSheets[0].rules[0].style.setProperty("background-color","red")
*/
// **********************************

/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/
//let element = document.getElementById("my-div")
//let createdP=document.createElement("p")
// element.prepend(createdP)
// element.remove()
// *****************
/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/
/*
let span = document.querySelector(".two")
console.log(span.parentElement)

span.onclick=function(){
  span.parentElement.remove()
}
*/
// ***********************
/*
  DOM [Cloning]
  - cloneNode(Deep)
*/
/*
let myp=document.getElementById("my-p").cloneNode(true)
let mydiv=document.querySelector("div")
myp.id=`${myp.id}-clone`
mydiv.appendChild(myp)
*/
// ***************
/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/
/*
let myp = document.querySelector("p")
myp.onclick=one
myp.onclick=two
function one(){
  console.log("message from on click 1")
}
function two(){
  console.log("message from on click 2")
}

window.onload="osama"

myp.addEventListener("click",function(){
  console.log("message from on click 3")
})
myp.addEventListener("click",one)
myp.addEventListener("click",two)

// myp.addEventListener("click","osama") //error

myp.onclick=function(){
  let newp = myp.cloneNode(true)
  newp.className="cloned"
  document.body.appendChild(newp)
}
let coloned = document.querySelector(".cloned")


//coloned.onclick=function(){
 // console.log("iam coloned")
//}
  //error
document.addEventListener("click",function(e){
  if (e.target.className=="cloned"){
    console.log("iam coloned")
  }
})
*/
// ****************
//challenge
//header
let header = document.createElement("div")

let elzero = document.createElement("p")
let elzeroText = document.createTextNode("elzero")
let home = document.createElement("p")
let homeText = document.createTextNode("home")
let about = document.createElement("p")
let aboutText = document.createTextNode("about")
let contact = document.createElement("p")
let contactText = document.createTextNode("contact")

header.className="header"
elzero.appendChild(elzeroText)
home.appendChild(homeText)
about.appendChild(aboutText)
contact.appendChild(contactText)
header.appendChild(elzero)
header.appendChild(home)
header.appendChild(about)
header.appendChild(contact)
header.style.display="flex"
header.style.padding="20px"
header.style.justifyContent="space-between"
header.style.alignItems="center"
header.style.textTransform="capitalize"
header.style.fontWeight="bold"

// console.log(header.childNodes[0])

header.firstElementChild.style.color="rgb(35,169,110)"
header.firstElementChild.style.width="75%"

document.body.append(header)
// *******************
//body
let body = document.createElement("div")
body.className="body"
body.style.display="flex"
body.style.flexWrap="wrap"
body.style.padding="20px"
body.style.justifyContent="center"
body.style.gap="20px"
body.style.minHeight="calc(100vh-142px)"
body.style.boxSizing="border-box"
body.style.backgroundColor="#dddddd"


for(let i=1 ; i<=15;i++){
  let text = document.createTextNode(i)
  let text2 = document.createTextNode("product")
  let div = document.createElement("div")
  let p = document.createElement("p")
  div.className="product"
  p.append(text2)
  p.className="p"
  div.append(text)
  div.append(p)
  body.append(div)
  if(div.className=="product"){
    div.style.textAlign="center"
    div.style.padding="20px"
    div.style.border="1px solid rgb(221, 221,221)"
    div.style.width="calc((100% - 40px) / 3)"
    div.style.boxSizing="border-box"
    div.style.color="black"
    div.style.backgroundColor="rgb(255,255,255)"
  }
}



document.body.append(body)

//footer
let footer = document.createElement("div")
let footerText = document.createTextNode("Copyright 2022")
footer.className="footer"
footer.append(footerText)
footer.style.textTransform="capitalize"
footer.style.fontWeight="bold"
footer.style.backgroundColor="rgb(35,169,110)"
footer.style.color="rgb(255,255,255)"
footer.style.padding="20px"
footer.style.textAlign="center"
document.body.append(footer)