let score="33abc"
console.log(typeof score)
let value=Number(score)
console.log(typeof value)
console.log(value)
//"55"=>55
//"55abc"=>NaN
//true=>1
let number=1
let bool1=Boolean(number)
console.log(typeof bool1)
console.log(bool1)
//1=>true
let name1="Ayam"
let name2=" Kattel"
let str3=name1+name2
console.log(str3)
console.log(2+3)
console.log("2"+"3")
console.log(2+"3")
console.log("2"+3)
console.log(2+3+"4")//Bad practice 
console.log("2"+3+4)//Bad practice. Use parenthesis
//Hence JS decides how to convert, from right to left in concatenation
