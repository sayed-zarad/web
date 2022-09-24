/*
let myVar="country"
let user = {
    // properties 
    theName : "osama",
    theAge : 38,
    "country of":"egypt",
    country :"EGYPT",
    skills:["html","css","js"],
    avilable:false,
    // methods
    sayHello:function(){
        return "hello"
    },
    checkAvalibality:function(){
        if(this.avilable==="true"){
            return `free for work`
        }
        else{
            return `not free`
        }
    },
    //nested object
    addreses:{
        KSA:"riyadh",
        egypt:{
            one:"cairo",
            two:"giza"
        }
    }
}
*/
// console.log(user.theName)
// console.log(user.myVar)
// console.log(user[myVar])
// console.log(user["country of"])

// console.log(user.skills[2])
// console.log(user.addreses.KSA)
// console.log(user.addreses.egypt.two)
// console.log(user.checkAvalibality())

/*
// let car={
//     year:2019
// }
let car = new Object()


car["year"]=2020
car.model="ford"
car.sayHello=function(){
    return `hello`
}
console.log(car)
console.log(car.sayHello())
*/
// ****************
/*
myVar = 100
console.log(this.myVar)

function sayHello(){
    console.log(this)
    return this
}
sayHello()
console.log(sayHello())

document.getElementById("cl").onclick=function(){
    console.log(this)
}
*/
/*
let user = {
    age: 38,
    ageInDays: function () {
      console.log(this);
      return this.age * 365;
    },
  };
  
  console.log(user.age);
  console.log(user.ageInDays());
  */

//   ******************
/*
let user = {
    age: 38,
    doubleAge: function () {
      return this.age * 2;
    },
  };
console.log(user)
console.log(user.age)
console.log(user.doubleAge())

let obj = Object.create({})
obj.a=100
console.log(obj)

let copyObj=Object.create(user)
copyObj.age=30
console.log(copyObj)
console.log(copyObj.age)
console.log(copyObj.doubleAge())
*/
// ************************
/*
  Object
  - Create Object With Assign Method
*/

let obj1 = {
    prop1: 1,
    meth1: function () {
      return this.prop1;
    },
  };
  
  let obj2 = {
    prop2: 2,
    meth2: function () {
      return this.prop2;
    },
  };
  
  let targetObject = {
    prop1: 100,
    prop3: 3,
  };

let finalObject =Object.assign(targetObject,obj1,obj2)
console.log(finalObject)