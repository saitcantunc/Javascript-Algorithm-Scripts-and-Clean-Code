function diffArray(arr1, arr2) {

    return [...eqArray(arr1, arr2), ...eqArray(arr2, arr1)]

    function eqArray(a, b){
        return a.filter(item => b.indexOf(item) === -1)
    }
}


  
console.log(diffArray([1, 2, 3, 5, 6, 7], [1, 2, 3, 4, 5]))

// ** OR **

function diffArray2(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item))
}

console.log(diffArray2([1, 2, 3, 5, 6, 7], [1, 2, 3, 4, 5]))