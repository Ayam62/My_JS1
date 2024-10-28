//..............................NUMBERS.............................................

const score =100//score = primitive number(properties,methods not attached)
const expScore= new Number(100)// exp score = object number(properties,methods are attached)
console.log(score);
console.log(expScore);
//console.log(score.toString()) gives error because it is primitive number type
console.log( expScore.toString());
console.log(expScore.toFixed(2))//sets precision value after point to 2 because client
                                // doesn't want to see all the values after point



const number=123.55//JS has a special feature called boxing which allows us to to put some methods in the primitive type too
//basically how it does the work is that the JS wraps a layer of object in the primitive type for a certian time so it acts as obj type
// i.e when the method is being used as soon as the method is executed the wrapping is gone and hence it acts as a basic primitive number

console.log(number.toPrecision(3))//rounds of other values to nearest
console.log(number.toPrecision(4))
console.log(number.toPrecision(2))//gives exponential values after 2 onwards
const Hnumber=10000000000
console.log(Hnumber.toLocaleString('en-IN'))//to indian style number system

// .MAX_VALUE tells us that it is the limit of number we can assign  in a variable after that it records as infinite
// .MAX_SAFE_INTEGER tells us that this is the maximum precision that is allowed in an integer after that it wraps 
// value in point and some value is deducted 

//...............................MATHS.......................................
console.log(Math)
console.log(Math.abs(-8))
console.log(Math.round(4.6))
//To costomize whether to take floor or ceiling values we have to use ceil and floor
console.log(Math.ceil(4.2))
console.log(Math.floor(4.5))

console.log(Math.sqrt(3))
console.log(Math.min(2,4,6,90))

console.log(Math.floor(Math.random()*100)+1)//Math.random with math. floor
// make values that calculates from maximum 10 to 20
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)

