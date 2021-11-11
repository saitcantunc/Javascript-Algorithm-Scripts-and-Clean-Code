function findElement(arr, func) {
    var num;
    for (let i = 0; i < arr.length; i++) {
        if(func(arr[i]) === true) {
            num = arr[i];

            return num;
        }        
    }
  }
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))

// ** OR **

function findElement2(arr, func) {
    return arr.find(func);
}




// ** OR **

function findElement3(arr, func) {
    return arr[arr.map(func).indexOf(true)];
}

console.log(findElement3([1, 2, 3, 4], num => num % 2 === 0))
