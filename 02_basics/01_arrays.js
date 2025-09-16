// Array declaration and initialization
const numArr = [1, 2, 3, 4, 5]
const stringArr = ["Hi", 'Hello', "How"]

const mixedArr = new Array(1, "hi", false)

// console.log(`${numArr}\n${stringArr}\n${mixedArr}`);

// // Array methods

// numArr.push(6);
// numArr.pop();

// // numArr.unshift(999) // this will add the given number at the start of the array
// numArr.shift(); // this will remove the first element of the array
// console.log(numArr);

// Some questionare methods
// console.log(stringArr.includes("Hi"));
// console.log(stringArr.indexOf("How"));

// Difference btw slice and splice
const orginalArray = [1, 2, 3, 4, 5]
const slicedArray = orginalArray.slice(1,3)
console.log(slicedArray);
console.log("A ", orginalArray);

const splicedArray = orginalArray.splice(1,3)
console.log(splicedArray);
console.log("B ", orginalArray);

// Slice does not modify the original array, it creates a new array, and does not include the end index
// Splice modifies the original array, it removes the elements from the original array and returns the removed elements, in includes end index as well.

