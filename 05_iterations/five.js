// const coding=["C","Java","Javascript","C++"]

// const values =coding.forEach((item)=>{// Note: forEach doesn't return value
//     //console.log(item);
//     return item
// })

// console.log(values)

//*******************************Note*****************************************
//In JavaScript, a callback function is a function that is passed as an argument to another function

 const myNums=[1,2,3,4,0,5,6,7,8,9]
// const newNums=myNums.filter((num)=>//Also for callBack function like forEach
//    num>4
//     // console.log(Nums) donot console log here it will give bool expression only
// )// using direct parenthesis without curly braces returns implicitly...if you use curly braces you have to write return explicitly
// console.log(newNums)


// To do the same in forEach

const newNums=[];

myNums.forEach((num)=>{
    if(num>4) newNums.push(num);
})
 console.log(newNums);



