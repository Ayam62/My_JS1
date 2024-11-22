const arr=[1,2,3,4,5,6,7,2,3,9]

function doubleArr(array){
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(arr[i]==arr[j]){
                array[i]/=2;
            }
        }
    }
    for(let i=0;i<array.length;i++){
        array[i]*=2
    }

}

doubleArr(arr)
console.log(arr)

// 1
// 2,3,4,5,6,7,2,3,9
