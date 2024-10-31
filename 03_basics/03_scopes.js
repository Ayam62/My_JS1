// let a=10
// const b=20
// var c=30

{}// This means scope in loops,conditionals  except in case of object definition
if(true){
// let a=10
// const b=20
var c=30
}
console.log(c)// This is the main problem with Js. Since that c is bounded by if curly braces its scope is outside the braces 
// c has become a global varaible which was not expected so let was used


//Note: In function nesting child can access parent's variables while parent's can't access child's variable

if(true){
    const userName="Ayam"
    if(userName==="Ayam"){
        const platform=" youtube"
        console.log(userName+platform)
    }
    //console.log(platform) //gives error because its scope is within that curly braces
}

//We Have two types of function declaration

function addOne(num1){
    return num1+1
}
console.log(addOne(5))//can be accessed before and after the definition of function

const holdValue=function addTwo(num1){ // holding that value inside a variable is iys anothet method
    return num1+2
}
console.log(addTwo(5))// Can be accessed only after function definition