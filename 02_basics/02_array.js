const myArr=[0,1,2,3,4,5]//can be any datatype also mixed...can be resizable
const myStrArr=['ayam','kattel','aryan']
console.log(myArr)
//IMP
//when performed copy operation in JS shallow copy is created. i.e it gives direct reference
// to the parent variable and the share the same content. Change in one changes into the other as they are sharing common data

// Another type of array declaration is.
const myNxtArr= new Array(0,1,2,3,4,5,6)
console.log(myNxtArr);

//Array methods
//myArr.push(6)
//myArr.pop()
//myArr.unshift(7)//adds from the first and shifts the position of all the arrays..not good as  no optimization
console.log(myArr.includes(7));
console.log(myArr.indexOf(9));// shows -1 because it doesn't have that index
const newArr = myArr.join()//changes type to string
console.log(typeof myArr);
console.log(typeof newArr);

//slice and splice
console.log("A",myArr)
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr)

const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr)
//Basic difference between slice and splice is that slice simple slices the given range of data excluding the last element of the range
//while splice includes the last element and group all the other arrays in the original array i.e original array is manipulated




