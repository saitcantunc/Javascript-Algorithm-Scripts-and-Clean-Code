/* n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100! */

function factorial(n) {
    
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

function solution(n) {
    var result = factorial(n);
    var digitArray = String(result).split("").map(parseFloat)
    var sum = 0;
    for(i = 0; i < digitArray.length; i++) {
        sum += digitArray[i];
    }
    return sum;
}

console.log(solution(100)) // This turns Nan. Becasuse 100! is a big number.

/* SO */

function main(n) {
    let factCounter = 1n;
    for (let i = n; i > 0n; --i) {
      factCounter *= i;
    }
    let numArr = factCounter.toString().split('');
    let sum = 0;
    numArr.forEach((el) => (sum += +el));
    console.log(sum);
  }
main(100n);

