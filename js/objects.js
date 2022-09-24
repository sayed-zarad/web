// const person = {
//     name: "Brian Holt",
//     city: "Seattle",
//     state: "WA",
//     favoriteFood: "🌮",
//     wantsTacosRightNow: true,
//     numberOfTacosWanted: 100
//   };
//   console.log(person);
//   console.log(person.favoriteFood);
//   console.log(person["name"]); // same as the line above; definitely prefer using the other one

  // const person1= {
  //   name: "sayed",
  //   rangeAge: "25-35"
  // };
  // const person2={
  //   name:"ahmed",
  //   rangeAge:"55-65"
  // }
  // function muisic(person){
  //   if(person.rangeAge==="25-35"){
  //       console.log("We think you'll like Daft Punk your crazy millenial.");
  //   }
  //   else if(person.rangeAge==="55-65"){
  //       console.log("You're obviously going to like Johnny Cash. He walks the line.");
  //   }
  //   else{
  //       console.log( "Uh, maybe try David Bowie? Everyone likes David Bowie, right?");
  //   }
  // }
  // muisic(person1)
  // muisic(person2)
// *********************************
  // const me = {
  //   name: {
  //     first: "Brian",
  //     last: "Holt"
  //   },
  //   location: {
  //     streetNumber: 500,
  //     street: "Fakestreet",
  //     city: "Seattle",
  //     state: "WA",
  //     zipCode: 55555,
  //     country: "USA"
  //   },
  //    display(){
  //     return `${this.name.first} ${this.name.last} ${this.location.streetNumber} ${this.location.state}`

  //   }
    
  //   }
  // console.log(me.display())

  // *********************************
  // arrays
  // *********************************

//   const week=[
//     "satarday",
//     "sanday",
//     "monday",
//     "tusday",
//     "wensday","tharday",
//     "faryday"
// ]
// console.log(week)
// *********************************
// const primenumber=[1,3,5,7,11,13,17]
// console.log(primenumber.length)
// console.log(primenumber.join(" | "))
// *********************************
// const courses =[
//   {teacher:"ahmed" , course:"english"},
//   {teacher:"sayed" , course:"math"},
//   {teacher:"ibrahim" , course:"prgramming"}  
// ]
// courses.push({teacher:"menna" , course:"art"})
// console.log(courses)
// courses[2]={teacher:"yasmeen" , course:"english"}
// console.log(courses[2])
// console.log(courses)
// *********************************
const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong"
];
for(let i = 0 ; i<cities.length ; i++){
  console.log(cities[i])
}