/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers. */

function isPalindrome(num) {
    var str = String(num);
    return str.split('').reverse().join('') === str;
}

result = 0;
for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
        let num = i * j;
        if (isPalindrome(num)) {
            result = Math.max(result, num);
        }
    }
}

console.log(result);
