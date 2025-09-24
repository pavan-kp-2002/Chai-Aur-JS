function giveMeAWrestlerName(wrestlers){
    let maxLength = wrestlers.length
    let randomNumber = Math.floor(Math.random() * maxLength)
    return wrestlers[randomNumber]
}

// console.log(giveMeAWrestlerName(["John Cena", "Batista", "Rey Mysterio", "Undertaker", "Roman Reigns"]))

function showWelcomeMessage(username = "Noob"){
    if(!username){
        console.log("Please provide a User name");
        return
    }
    return `${username} just logged in!`
}

// console.log(showWelcomeMessage("Pavan"))
// console.log(showWelcomeMessage())
// console.log(showWelcomeMessage(""))

function canHandleMultipleInputs(num1, str1, ...inputs){
    console.log(inputs)
}

// The ... here is called a Rest operator and it stores the given values as a array.

canHandleMultipleInputs(200, "Hello", 500, {name: "India"})