function sayMyName(){//code reusabilty at any point
    console.log("A")
    console.log("Y")
    console.log("A")
    console.log("M")
}
//sayMyName()

function addNumbers(num1,num2){
    console.log(num1+num2)
}
addNumbers(2,null)

// to store the value in a variable do the following

function addNumbervar(num1,num2){
    // let result =num1+num2
    return num1+num2
}
const result=addNumbervar(2,3)
console.log(result)

//Note: Retyrn vanda muni ko code execute hudaina

function loginUserMessage(userName= "Ayam"){ //default argument
    if(undefined){ //will never be executed because defailt argument is used
        console.log("Please enter the username");
        return "You must!"
    }
   return `Hello ${userName} . You just logged in.`
}
console.log(loginUserMessage())


// If i donot know what is the exact no argument that user is going to input then i use rest operator or simply we can say ...
function calculateCartPrice(...price){
return price
}
console.log(calculateCartPrice(200,400,200)) //..gives an array

function calculateCartPrice1(val1,val2,...price){
    return price
    }
    console.log(calculateCartPrice1(200,400,200,600))// 200 and 400 goes to val1 and val2 while the other 200 and 600 goes to price

    //Object handling
    const user ={
        userName:"Ayam",
        price:"1 crore"
    }
    function handleObject(anyUser){
        console.log(`Your name is ${anyUser.userName} and your price is ${anyUser.price}`)
    }
    handleObject(user)// Note: if the user contains prices then we whould handle the error using of else statement

    //We can also derectly give parameters inside the function like this
    handleObject({
        userName:"Aryan",
        price:"1rs"
    })

