let myDate= new Date();
console.log(myDate)// not readable
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())

let myTime= new Date (2024,0,23)//month starts from 0 in javascript if used in comma
let anotherMyTime=new Date("2024-01-23")//feel the difference
console.log(myTime.toDateString());
console.log(myTime.toLocaleString());

let myTimeStamp=  Date.now();// new halna paidaina because syntax
console.log(myTimeStamp);// mili seconds value from the given date to now
console.log(myTime.getTime())//milli seconds value

// to compare dates in secods we have to convert it and floor it to remove decimal
console.log(Math.floor(myTimeStamp/1000))

let newDate= new Date()
console.log(newDate.getDay())//use . to get value in day,month,year etc

// to costomize format
newDate.toLocaleString('default',{
    weekday: "long",
})
