/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/
/*
let myData = [1, 1, 1, 2, 3,"A"];
// let myUniqueData=new Set([1, 1, 1, 2, 3])
// let myUniqueData=new Set(myData)
// let myUniqueData=new Set().add(1).add(1).add(1).add(2).add(3)
let myUniqueData=new Set()
myUniqueData.add(1).add(1).add(1).add(2).add(3).add("A")

console.log(myData)
console.log(myUniqueData)

console.log(myUniqueData.size)

console.log(myData[0])
console.log(myUniqueData[0]) //undefined

// myUniqueData.delete(2)
console.log(myUniqueData.delete(2))

console.log(myUniqueData)
console.log(myUniqueData.size)

// myUniqueData.clear()

console.log(myUniqueData)
console.log(myUniqueData.size)

console.log(myUniqueData.has("A"))
*/
// **********************
/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

/*
// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
console.log(mySet)

//value + key alias
let iterator = mySet.keys()
console.log(iterator)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next())

//size
console.log(`size of element inside set is ${mySet.size} `)

//forEach
mySet.forEach((el)=>console.log(el))

console.log("#".repeat(20))

// Type Of Data

let myws = new WeakSet([{A:1 , B:2}]);
console.log(myws)

//value + key [alias for values] 
// let iter = myws.keys()
// console.log(itr)
// console.log(itr.next().value)
*/
// ********************
/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/
/*
let myObject={}
let myEmptyObject = Object.create(null)
let myMap = new Map()

console.log(myObject)
console.log(myEmptyObject)
console.log(myMap)

let myNewObject = {
  10:"number",
  "10":"string"
}
console.log(myNewObject[10])

let myNewMap = new Map()
myNewMap.set(10,"number")
myNewMap.set("10","string")
myNewMap.set(true,"boolean")
myNewMap.set({a:1 , b:2},"object")
myNewMap.set(function doSomeThing(){},"function")

console.log(myNewMap.get(10))
console.log(myNewMap.get("10"))

console.log("#######")

console.log(myNewObject)
console.log(myNewMap)
*/
// ******************
/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/
/*
let myMap= new Map([
  [10,"number"],
  ["name","string"],
  [false ,"boolean"]
])
// myMap.set(10,"number")
// myMap.set("name","string")

console.log(myMap)
console.log(myMap.get(10))
console.log(myMap.get("name"))
console.log(myMap.get(false))


console.log(myMap.delete("name"))


console.log(myMap.size)

console.log(myMap.has(false))

// myMap.clear()
// console.log(myMap.size)
*/
// ***************
/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/
/*
let mapUser = {theName : "elzero"}
let myMap = new Map()
myMap.set(mapUser,"object value")

mapUser = null

console.log(myMap)

console.log("#".repeat(20))

let WeakMapUser = {theName : "elzero"}
let myWeakMap = new WeakMap()

myWeakMap.set(WeakMapUser,"oblect value")

WeakMapUser= null
console.log(myWeakMap)
*/
// ************************
/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("osama"))
console.log(Array.from("12345",function(n){
  return +n + +n
}))

let myArray = [1,1,1,2,3,4]
// let mySet = new Set(myArray)
// console.log(mySet)
// console.log(Array.from(mySet))

// console.log([...new Set(myArray)])

function af(){
  return Array.from(arguments)
}
console.log(af("osama","ahmed","sayed",1,2,3))
