//concatenate string and number 
const name="Ayam"
let num= 11
console.log(name+num+ "value")//OUTDATED!!!!!!!!!!!!!
//DO THIS INSTEAD
console.log(`Hello ny name is ${name} and my roll num is ${num}`);// USE THISSS as STANDARD
const realname= new String('AYAM-KATTEL')
//HERE realname is being created with string as an object and a,y,a,m are the position of string object with
// position 0,1,2, and 4 respectively. Since it is an object is has different type of properties like .toUpperCase , .length
//etc 
console.log( realname== 'AYAM')//true because loose check 
console.log( realname=== 'AYAM')//false because strict check


//...............................PROPERTIES......................................

console.log(realname[0])
console.log(realname.__proto__)
console.log(realname.length)
console.log(realname.toLowerCase())
console.log(realname.charAt(3))
console.log(realname.indexOf('M'))
console.log(realname.slice(0,2))

const newstr_totrim = "    AYAM      "
console.log(newstr_totrim)
console.log(newstr_totrim.trim())//trims the leftout spaces.

const url = "https://ayam.com/ayam%20kattel" //browser doesn't understand any spaces so it adds %20 automatically
console.log(url.replace('%20','-'))// replaces  a part of string
// BE FAMILIAR WITH THE STRING METHODS AS MUCH AS POSSIBLE
console.log(url.includes('ayam'))//asks if ayam is present in the url or not

console.log(realname.split('-'))



