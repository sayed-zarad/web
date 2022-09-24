// const redsquare=document.querySelector('.red-square')
// redsquare.style.backgroundColor='limegreen'
// ************
// const change = document.querySelectorAll('.js-target')
// for(let i=0;i<change.length;i++){
//     const element = change[i];
//     element.innerText  = 'Modified by JavaScript!';
// }
// ***************
// const botton =document.querySelector('.event-button')
// botton.addEventListener('click',function(){
//     alert("hey there")
// })
// ******************
// const input =document.querySelector(".input-to-copy");
// const p =document.querySelector(".p-to-copy-to");

// input.addEventListener("keyup",function(){
//     p.innerText = input.value;
// });
// ***********
// const color =document.querySelector(".color-box")
// const input = document.querySelector(".color-input")
// input.addEventListener("change",function(){
//     color.style.backgroundColor = input.value;
// })
// ******************
document.querySelector(".button-container").addEventListener('click',function(event){
    alert(`u clicked on boutton ${event.target.innerText}`);
})