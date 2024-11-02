// const myNums=[1,2,3,4,5,6,7,8,9]

// const newNums= myNums.map((num)=>num+10)
//  const newNums=myNums
//  .map((num)=> num*10)
//  .map((num)=>num+1)
//  .filter((num)=>num>=40)// in this method chaining the paramters of the second method will receive the returned value from the first parameter

// console.log(newNums)

//Note: Filter is used in conditional case and maps is used in operational case

// Reduce method(accumulator and cureent value is its syntax)
// const myNums=[1,2,3]
// const initialValue=0
// const myTotal= myNums.reduce((accumulator,currentVal)=>{
//     //console.log(accumulator,currentVal)
//     return accumulator+currentVal
// },initialValue)
// console.log(myTotal)

// Use reduce function to add all the items in Cart

//  const myCart=[
//     {
//         itemName:"Javascript",
//         price:2999
//     },
//     {
//         itemName:"Python",
//         price:3999
//     },
//     {
//         itemName:"Ruby",
//         price:4999
//     },
//     {
//         itemName:"C",
//         price:5999
//     },
//     {
//         itemName:"DSA in C++",
//         price:6999
//     }
//  ]
 
//  const totalPrice=myCart.reduce((accumulator,item)=>accumulator+item.price,0)//Observe Carefully the use of item
//  console.log(totalPrice);


 

