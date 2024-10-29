const tvShows=["TMKOC","The Office"]
const films=["Dabang","Tarzan"]
//tvShows.push(films)
//console.log(tvShows) //wanted to merge but array is created inside an array. oh no!
//console.log(tvShows.length)//proff
console.log(tvShows.concat(films))
// Note : push pushes element to an existing array while concat makes a new array

const allShows=tvShows.concat(films)
console.log(allShows)

//spread  method (like droppping of glass and pieces are dropped)
const spreadedShows=[...tvShows,...films]
console.log(spreadedShows);
//Note: Both the spread and concat do the same operation at the end (with different approach)
// but the spread is more flexible since it can be used to create copies of  object too

const anotherArr=[1,2,[3,4],5,[6,7,[8,9]]]
console.log(anotherArr[4][2][0])//to acccess 8
const scatteredArr= anotherArr.flat(Infinity)//all array element are of same level now
console.log(scatteredArr)

console.log(Array.isArray("Ayam"))//returns if "Ayam" is array or not
console.log(Array.from("Ayam"))//makes array from "Ayam"...also works for object
console.log(Array.from({name:"Ayam"}))// it was not specified whether to make name as string or Ayam to make string so it returns an empty array

// To  make array out of integers
let array1=50
let array2=60
let array3=70

console.log(Array.of(array1,array2,array3))//combines all integers to make array




