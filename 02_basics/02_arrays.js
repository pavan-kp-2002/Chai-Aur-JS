const rcbPlayers = ["Virat", "ABD", "Gayle"]
const miPlayers = ["Rohith", "Hardik", "Bumrah"]

const starPlayers = [...rcbPlayers, ...miPlayers]
console.log(starPlayers)

// Concat or spread operator is used to merge two arrays, concat allows only two arrays at a time, while spread operator can merge multiple arrays at a time.

const nestedArr = [1, 2, [3, 4, [4, 5, 6], 7], 8]
console.log(nestedArr.flat(Infinity))

console.log(Array.from("Pavan"))
console.log(Array.from({1: "pavan"},)); // need explicit declaration to create an array

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3))