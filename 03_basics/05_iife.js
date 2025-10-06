// Immediately Invoked Function Expression (IIFE)

// To call the function just after initializing it and to avaoid global scope pollution 

// Named IIFE
(function chai (){
    console.log("Thank you for calling");
})();

((name) => {
    console.log(`DB connected to ${name}`);
})("SQL")

// To execute two IIFE in same file use semicolon after calling it;