// (array specific loops)

// 1. for of loop

// const arr=[1,2,3,4,5]
// for (const i of arr) { //object here  means  which array(It's arrray name)
//     console.log(i)
// }

// const arr=["Ayam","Aryan",3,"Bune","HAHA"]
// for (const i of arr) { //object here  means  which array(It's arrray name)
//     console.log(i)
// }

// const greetings="Hello World!";
// for( const i of greetings){
//     console.log(`Each element of greetings is ${i}`)// in string it extracts each elements
// }

//Maps

const map=new Map()// Maps are data structure that allows us to  store key-value pairs. It is similar to object
map.set('Nep',"Nepal")
map.set("Fr","France")

// console.log(map)

//A data structure is a way of organizing and storing data in a computer so it can be accessed and manipulated
//  efficiently. Data structures provide a specific format to store different types of data and define the operations that can be performed on that data, like searching, sorting, inserting, and deleting.

// for(const key of map){// Here the key holds both key and value implicitly. So to access both the keys and value separately in a versatile manner we have to separate them
//     console.log(key)
// }

// for(const [key,value] of map){
//     console.log(`The key for ${value} is ${key}`)
// }

//  const myObj={
//     "game1": "Freefire",
//   "  game2": "Pubg",
//     "game3":"FIFA"
//  }
//  for(const key of myObj ){// Not iterable in the same way as for the maps(Remember this is for of loop not for in loop)
//     console.log(key)
//  }
// Note: For in loop can't be used in maps

