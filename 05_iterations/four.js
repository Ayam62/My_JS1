const coding =["js","ruby","swift"]
// coding.forEach( function (i){// calls back function meaning we can manipulate each elemtn of array inside that function . The function should be anonymous. The parameter inside that function should be the inndex of that array.
// console.log(i)
// })

// coding.forEach((i)=>{// from arrow function
//     console.log(i)
//     })

// 3rd method to do the same
// function manipulateMe(i){
//     console.log(i)
// }
// coding.forEach(manipulateMe)
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

//object inside an array

const myCoding=[
    {
        languageName: "Javascript",
        languageFile: ".js"
    },
    {
        languageName: "Python",
        languageFile: ".py"
    },
    {
        languageName: "C++",
        languageFile: ".cpp"
    }
]
myCoding.forEach((item,index,myCoding)=>{
    console.log(item.languageName,item.languageFile,index,myCoding)
})
