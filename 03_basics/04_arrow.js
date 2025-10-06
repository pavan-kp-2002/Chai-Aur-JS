const user = {
    userName : "Naman",
    isSubscriber: false,
    
    // this is used to refer the current context, variables within scope.
    welcomeMessage : function(){
        console.log(`${this.userName} welcome back!`)
    }
}

// user.welcomeMessage()
// user.userName = "Aman"
// user.welcomeMessage()

console.log(this)

// Global object in browser is window and in node environment it is {} empty


function testThis(){
    let userName = "Pavan"
    console.log(this.userName)

    // This is applicable for objects and not for functions.
}

// testThis()

const chai = () => {
    let userName = "KP"
    console.log(this.userName)

    // this doesnot give anything.
}

chai()

// Arrow functions types

//basic
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Single line and implicit return
// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => (num1 + num2)

const returnName = () => ({name: "Pavan"})

console.log(returnName())

console.log(addTwo(4, 5))