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
    let result =num1+num2
    return result
}
const result=addNumbervar(2,3)
console.log(result)