const userEmail="ayam.ai"
if(userEmail){
    console.log("Got user email")// Runs this code because there is precense of some string. if black value it is considred as false but if blank array is created it is considred as true but whyyy?? See in note
}
else{
    console.log("Sorry")
}
//Note: trythy and falsy values

//falsy values
//false,0,-0(for interview),BigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'false'," ",(String vitra j vayeni truthy value),[],{},function(){},

const userArr=[]
if(userArr.length===0){
    console.log("Array is empty")
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){// note: Object.keys(objectname) gives an array
    console.log("Obj is empty")
}
//Nulllish Coalescing Operator(??).... null undefined
// let val1;
// val1=5??10
// val1=null??10
// console.log(val1);
//Note: Hence Nullish Coalescing Operator(??) assigns the right hand operator if null or undefined is int the right hand side otherwise it always assignes left hand operator. If null??10??20 then first value is 10 so 10 remains


//TERNARY OPERATOR

let a=5;
let b=3;
let c=2
let g;
console.log(`${g} is the greater number`)