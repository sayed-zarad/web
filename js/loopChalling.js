/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let x=0,y=0,z=1,a=1;

// for(let i=0;i<myAdmins.length;i++){
//     if(myAdmins[i]=="Stop"){
//         break;
//     }
//     else{
//         x++;
//     }

// }
// console.log(x);

for(let i=0;i<myAdmins.length;i++){
    if(myAdmins[i]=="Stop"){
        break;
    }
    else{
        x++;
        document.write(`<div>the admin for team ${z++} is ${myAdmins[i]} </div>`)
        for(let j=0;j<myEmployees.length;j++){
            if(myEmployees[j].charAt(0)==myAdmins[i].charAt(0)){
                document.write(`${a++} ${myEmployees[j]}`)
                document.write(`<br></br>`)
            }
        }
        a=1
    }

}
document.write("<hr>")

document.write(`<div>We Have ${x}  Admins</div>`);
document.write("<hr>")