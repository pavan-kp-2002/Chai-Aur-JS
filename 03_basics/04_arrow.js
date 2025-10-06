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