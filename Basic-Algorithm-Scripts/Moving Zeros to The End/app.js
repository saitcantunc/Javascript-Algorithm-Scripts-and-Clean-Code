var moveZeros = function (arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let isZero = arr[i] === 0
        if (isZero){
            count++
            arr.splice(i, 1)
            i--
        }
    }
    for(let i = 0; i < count; i++){
        arr.push(0);
    }
    return arr
}
  
console.log(moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9]));


/* OR */

var moveZeros2 = function (arr) {
    var filtedList = arr.filter(function (num){return num !== 0;});
    var zeroList = arr.filter(function (num){return num === 0;});
    return filtedList.concat(zeroList);
}

console.log(moveZeros2([9,0,9,1,2,1,1,3,1,9,0,0,9]));