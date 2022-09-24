//check if threre is local storage color option
let mainColors = localStorage.getItem("color_option")


if(mainColors !== null){
    document.documentElement.style.setProperty('--main--color',localStorage.getItem("color_option"))

    // check for active class
    document.querySelectorAll(".colors-list li").forEach(element=>{
        element.classList.remove("active")

        // add active class on element with data color === local storage
        if(element.dataset.color===mainColors ){
            // add active class
            element.classList.add("active")
        }
    })
}



// random background option
let backgroundOption=true

// variable to control the background intrval
let theBackgroundInterval;

// check if there is local storage randoum background item
let backgroundLocalItem=localStorage.getItem("background_option")

// check if random background local storage is not empty
if(backgroundLocalItem!==null){
    if(backgroundLocalItem==='true'){
        backgroundOption=true
    }
    else{
        backgroundOption=false
    }
    // remove active class from all spans
    document.querySelectorAll(".random-backgrounds span").forEach(ele=>{
        ele.classList.remove("active")
    })

    if(backgroundLocalItem==='true'){
        document.querySelector(".yes").classList.add("active")
    }
    else{
        document.querySelector(".no").classList.add("active")
    }

}

// toogle spin class in icon
document.querySelector(".toogle-setting .fa-gear").onclick=function(){
    this.classList.toggle("fa-spin")

    document.querySelector(".setting-box").classList.toggle("open")
    
}

// switch colors
const colorsLi = document.querySelectorAll(".colors-list li")

// loop on every list item
colorsLi.forEach(li=> {
    //click on every list item
    li.addEventListener("click",(e)=>{
        
        //set color on root
        document.documentElement.style.setProperty('--main--color',e.target.dataset.color)

        //SET color on local storage
        localStorage.setItem("color_option",e.target.dataset.color)

        handleActive(e)

    })
})


// switch random-background option
const randomBackEl = document.querySelectorAll(".random-backgrounds span")

// loop on every spans
randomBackEl.forEach(span=> {
    //click on every span 
    span.addEventListener("click",(e)=>{
        
        handleActive(e)

        if(e.target.dataset.background==='yes'){
            backgroundOption=true
            randomizeImgs();
            localStorage.setItem("background_option",true)
        }
        else{
            backgroundOption=false
            clearInterval(theBackgroundInterval)
            localStorage.setItem("background_option",false)
        }
    })
})


// ************
// select landing bage element
let landingPage = document.querySelector(".landing-page")

// get array of images 
let imagsArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]

//function to randomize imgs
function randomizeImgs(){
    
    if(backgroundOption===true){
        theBackgroundInterval= setInterval(()=>{
            //get randoum number 
            let randoumNumber = Math.floor(Math.random() * imagsArray.length)
            //change background image url 
            landingPage.style.backgroundImage='url("images/'+imagsArray[randoumNumber] +'")'
        
        },10000)
    }
}
randomizeImgs()

// ******************


// select skills selector
let ourSkills=document.querySelector(".skills")
window.onscroll = function (){

    // skills offser top
    let skillsOfsetTop=ourSkills.offsetTop;

    // skills outer hight
    let skillsOuterHeight=ourSkills.offsetHeight;

    //window Height
    let windowHight = this.innerHeight

    //window scroll top
    let WindowScrollTop=this.pageYOffset;

    if(WindowScrollTop> (skillsOfsetTop + skillsOuterHeight - windowHight)){
        
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach(skill=>{
            skill.style.width=skill.dataset.progress
        })
    }

}

// **********************
// creat popup with the image
let ourGallery =document.querySelectorAll(".galary img");
ourGallery.forEach(img=>{
    img.addEventListener("click" , (e)=>{
        
        //creat over lay element
        let overLay =document.createElement("div");
        
        //add class to over lay
        overLay.className="popup-overlay";

        //append overlay to the body
        document.body.appendChild(overLay);

        //creat pop up box
        let popupBox=document.createElement("div")

        if(img.alt!==null){
            
            //creat heading
            let imgHeading = document.createElement("h3")

            //creat text for heading
            imgText = document.createTextNode(img.alt)

            //append the text to the heading
            imgHeading.appendChild(imgText)

            //append text to popup box
            popupBox.appendChild(imgHeading)
        }

        //add class to the popup box
        popupBox.className="popup-box"

        //creat the image
        let popupImage= document.createElement("img")

        // set image source
        popupImage.src=img.src

        //add image to popup box
        popupBox.appendChild(popupImage)

        //append the popup box to body
        document.body.appendChild(popupBox)

        // create the close span
        let clossButton = document.createElement("span")

        //creat the close botton text
        let closeButtonText = document.createTextNode("X")

        // append text to close button
        clossButton.appendChild(closeButtonText)

        // add class to close button
        clossButton.className="close-button"

        //add close button to the popup bpx
        popupBox.appendChild(clossButton)
    });
});

//close popup
document.addEventListener("click",function(e){
    if(e.target.className=="close-button"){

        //remove the current popup
        e.target.parentNode.remove()

        //remove over lay
        document.querySelector(".popup-overlay").remove()
    }
})


//select all bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet")



//select all links
const allLinks = document.querySelectorAll(".links a")


function scrollTo(elements){
    
elements.forEach(ele=>{
    ele.addEventListener("click",(e)=>{

        e.preventDefault();
        
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        });
    });
});
}
scrollTo(allBullets)
scrollTo(allLinks)

//handle active state 
function handleActive(ev){
     // remove active class from all children
    ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
        element.classList.remove("active")
    })

    // add active class on self 
    ev.target.classList.add("active")
}


// control bullets
let bulletsSpan = document.querySelectorAll(".bullets-option span")
let bulletsContainer = document.querySelector(".nav-bullets")
let bulletLocalItem=localStorage.getItem("bullets_option")


if(bulletLocalItem!==null){
    
    bulletsSpan.forEach(span=>{
        span.classList.remove("active")
    })

    if(bulletLocalItem==="block"){
        bulletsContainer.style.display="block"
        document.querySelector(".bullets-option .yes").classList.add("active");
    }
    else{
        bulletsContainer.style.display="none"
        document.querySelector(".bullets-option .no").classList.add("active")
    }
}

bulletsSpan.forEach(span=>{
    span.addEventListener("click",(e)=>{

        if(span.dataset.display==="show"){
            bulletsContainer.style.display="block"
            localStorage.setItem("bullets_option","block")
        }
        else{
            bulletsContainer.style.display="none"
            localStorage.setItem("bullets_option","none")
        }
        handleActive(e)
    })
})

// reset button
document.querySelector(".reset-option").onclick=function(){

    localStorage.clear();
    // localStorage.removeItem("bullets_option")
    // localStorage.removeItem("color_option")
    // localStorage.removeItem("background_option")
    window.location.reload()
}

//toggle menu 
let toggleButton= document.querySelector(".toggle-menu")
let tLinks=document.querySelector(".links")

toggleButton.onclick=function(e){
    //stop propegation
    e.stopPropagation()

    this.classList.toggle("menu-active")

    tLinks.classList.toggle("open")
}

//click any where outside menu and toggle button
document.addEventListener("click",(e)=>{
    if(e.target!==toggleButton && e.target!== tLinks){

        //check if menu is open or not
        if(tLinks.classList.contains("open")){
            toggleButton.classList.toggle("menu-active")

            tLinks.classList.toggle("open")
        }

    }
})

// stop propegation on menu
tLinks.onclick=function(e){
    e.stopPropagation()
}