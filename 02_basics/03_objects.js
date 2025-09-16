// Object literal does not produce singleton

const unqSym = Symbol('unique')

const user = {
    name : 'John',
    age: 22,
    email: 'john@apple.com',
    region : 'IND',
    [unqSym] : '1234-5678-9101',
    greet : function(){
        console.log("Hello user");
        console.log(`You have been logged in from ${this.region}`);
    }
}

// console.log(user.name)
// console.log(user[unqSym])
// console.log(user)

user.greet()