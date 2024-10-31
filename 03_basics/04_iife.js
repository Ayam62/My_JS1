//Immediately Inveked Function Expression (IIFE)

(function chai(){
    console.log("Chaye is ready")
})();//by using parenthesis outside a function and also wrapping the funtion with parentheis we can immediately invoke a function
// Immeidatly invoked function should be closed after its end because it doesn't know its bound

(()=>{// same  thing using arrow function 
    console.log("chaye  is ready from arrow")
})();

// with parameter
((name)=>{// same  thing using arrow function 
    console.log(`chaye  is ready from arrow to ${name}`)
})("Ayam");