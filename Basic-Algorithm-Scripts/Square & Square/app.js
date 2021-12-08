/* Find the difference between the sum of the squares of 
the first one hundred natural numbers and the square of the sum. */

function sqrAndSumOfHundredNumbers() {
    let result = 0;
    for (let i = 0; i <= 100; i++) {
        result += (i * i)   
    }
    return result;
}

function sumAndSqrOfHundredNumbers() {
    let result = 0;
    for (let i = 0; i <= 100; i++) {
        result += i   
    }
    return result * result
}

function difference() {
    return Math.abs(sqrAndSumOfHundredNumbers() - sumAndSqrOfHundredNumbers())
}

console.log(difference())

/* OR */

function sumSumDiffSum() {
    let sum = 0
    let squareSum = 0
    for (let i = 0; i <= 100; i++) {
        sum += i;
        squareSum += (i * i);    
    }
    return Math.abs(squareSum - (sum * sum))
}

console.log(sumSumDiffSum())