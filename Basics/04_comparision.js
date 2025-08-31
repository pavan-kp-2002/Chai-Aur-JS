// console.log(1 < 2);
// console.log(1 > 2);
// console.log(1 <= 2)

// Equality operator (==) and Comparision operators(<=) work in a different way.

// Primitive data types total 7 (number, bigInt, string, boolean, undefined, null, symbol)
let subscribersCount = 1000;
let viewsCount = 10000200003000033n
let channelName = "Chai aur Code"
let isForKids = false
let ownerName;
let country = null;

// console.log(typeof subscribersCount);
// console.log(typeof viewsCount);
// console.log(typeof channelName);
// console.log(typeof isForKids)
// console.log(typeof ownerName)
// console.log(typeof country)

// Non primitive or referential datatypes
let mixedArray = ["India", 1, false, 344n];

let mixedObject = {
    1: "Inida",
    2: false,
    3: 123
}

let myFunctionVariable = function myFunction(){
    console.log("Hello world!")
}

console.log(typeof mixedArray)
console.log(typeof mixedObject)
console.log(typeof myFunctionVariable)

// ************************************Stack and Heap***************************
// Primitive data types are stored in stack and when accesed it give a copy of it. Function calls, variables during function exdcution and return address are all stored in stack.
// Non primitive data types are stored in Heap and its reference is given when accessed.