function myFunc(){
    var c = 300
}

if (true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
console.log(c);

// var is function or global scoped, if written inside any if else or for loop it will still be accessible outside the block
// var is avoided for this reason

// let is block scoped accessible only inside {....} if declared inside.