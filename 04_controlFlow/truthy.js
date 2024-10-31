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