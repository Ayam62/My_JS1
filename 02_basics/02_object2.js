// const tinderUser=new Object() // it is singleton object


//Nesting of object 

const RegisteredUser={
    name:{
        fullname:{
            firstName:"Ayam",
            lastName:"Kattel"
        }
    }
}
console.log(RegisteredUser.name.fullname.firstName);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
      3:"c",
      4:"d"
}

const obj3={obj1,obj2}//will create obj2 inside obj1 (wasnot desired)
const obj5=Object.assign({},obj1,obj2)// first bracket is destination and others are source
const obj4={...obj1,...obj2}//   BEST WAY
console.log(obj4);  // this scatters all the elements


//ARRAY OF OBJECTS

const users=[
    {
        id1:9863,
        address:"damak"
    },
    {
        id1:9863,
        address:"damak"
    },
    {
        id1:9863,
        address:"damak"
    },
    {
        id1:9863,
        address:"damak"
    },
    {
        id1:9863,
        address:"damak"
    }
]
console.log(users[1].id1)

const tinderUser={
    id:9863,
    name:"Ayam",
    email:"ayam@tinder.com"
}
console.log(Object.keys(tinderUser))//displayes only keys i.e id , name and email
console.log(Object.values(tinderUser))// display values of the keys only without displaying keys
console.log(Object.entries(tinderUser))// Binds each id and values into array
console.log(tinderUser.hasOwnProperty("id"))//checks if it assigned property or not



