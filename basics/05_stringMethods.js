const name = "Pavan"
// console.log(name.toLowerCase())

// Even though name is a primitive datatype, when we access methods or property of name
// JS automatically wraps string primitive with the String Object and this is called autoboxing.

const boxedName = new String("Pavan") // a String object (Wrapper)
// console.log(boxedName.valueOf()) // unboxes to the primitive string
// console.log(String(boxedName))


console.log(`Hello I am ${name} and I live in city`)

let firstName =  new String("Hindu")
console.log(firstName.toLowerCase());
console.log(firstName.charAt(2))
console.log(firstName.indexOf('n'))

console.log(firstName.substring(0, 4)) // Substring treats - values as 0
console.log(firstName.slice(-4, 4))

// const s = "abcdef";

// s.slice(1, 4);        // "bcd"
// s.substring(1, 4);    // "bcd"

// s.slice(-3, -1);      // "de"
// s.substring(-3, -1);  // ""  (treated as substring(0,0))

// s.slice(4, 1);        // ""  (start > end)
// s.substring(4, 1);    // "bcd"  (swapped to substring(1,4))

// s.slice(1.7, 4.2);    // "bcd"  (arguments truncated)
// s.substring(1.7, 4.2);// "bcd"