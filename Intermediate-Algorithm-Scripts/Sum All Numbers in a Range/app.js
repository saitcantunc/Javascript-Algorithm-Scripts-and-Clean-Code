const sumAll = arr => {
    const startNum = arr[0]
    const endNum = arr[1]
    const numCount = Math.abs(startNum - endNum) + 1
    const sum = ((startNum + endNum) * numCount) / 2
    return sum
}

console.log(sumAll([5, 4]))

// ** OR **

function sumAll2(arr) {
    let sumBetween = 0
    for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
        sumBetween += i
    }
    return sumBetween
}

console.log(sumAll2([10, 4]))