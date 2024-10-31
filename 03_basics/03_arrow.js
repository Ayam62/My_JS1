const user={
    userName:"Ayam",
    age:19,
    welcomeMsg:function(){
        // console.log(`${this.userName} Welcome to our website`)//this is used to specify current context
        console.log(this) //gives full description of current userName age etc
    }
}
// user.welcomeMsg()
// user.userName="Kattel"//Here the current cotext is changed to "Kattel."
// user.welcomeMsg()//By the use of this keyword we were able to print Kattel
//console.log(this)//gives empty parenthesis because no any current contexts because we are in node environment

// function chai(){
//     console.log(this)// will refer to global object in node js and give lots of info about it
//     let userName="ayam"
//     console.log(this.userName)//undefined because in a function this.(anyvariable) shows value only if that variable has global scope
// }
// chai()
const  chai=()=>{
    let userName="ayam"
    console.log(this)//doesn't work still with this keyword
}
chai()



//Arrorw function..................   ()=>{}

    // const addTwo=(num1,num2) =>{
    //     return num1+num2
    // }
    // console.log(addTwo(2,4))
    const addTwo=(num1,num2) => (num1+num2)// 1st advantage is implicit return. !!!!!!!IMP...cur;y braces explicit return ,parnethesis explicit return
    console.log(addTwo(2,4))



