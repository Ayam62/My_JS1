// singleton...if obj is created from constructor singleton is made if created from literals singleton is not created

//object literals

//To use sumbols inside an object......
const mySym= Symbol("myKey1")




const JsUser={ // Non singleton object
    name:"Ayam",//By default the systme processes the name as "name"
    age:19,
    location:"Damak",
    [mySym]:"myKey1",
    email:"ayamkattel@gmail.com",
    isLoggedIn:false
}
//Elements can be accessed in two ways
console.log(JsUser.name)
console.log(JsUser["name"])///because remember the system kept it as a string
console.log( typeof JsUser[mySym])
// Note: To put sumbol inside the object => if directly a variable is created inside the object(without sq bracket) 
//it would not act as a symbol 


//To overwritevalue.....................
JsUser.name="AyamKKKKKKKKK"
console.log(JsUser.name)
// to lock values 
//Object.freeze(JsUser)// now the value of any elements can't change
JsUser.email="ayamkkkkkkkk@gmail.com"//tries to change but fails
console.log(JsUser)

//FUnction can act as normal variable

JsUser.greeting=function(){
    console.log(`Namaste,${this.name}. Your age is ${this.age}`)
}
console.log(JsUser.greeting);//function reference not function
console.log(JsUser.greeting())//runs method
