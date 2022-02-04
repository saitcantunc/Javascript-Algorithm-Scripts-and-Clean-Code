/* A Narcissistic Number is a positive number which is the sum of its own digits,
    each raised to the power of the number of digits in a given base.In this Kata, we will restrict ourselves to decimal(base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 */

function narcissistic(value) {
	let newArr = value.toString().split("").map(Number);
	let len = newArr.length;
	let sum = 0;
	for (let i = 0; i < len; i++) {
		sum += Math.pow(newArr[i], len);
	}
	return sum === value ? true : false;
}

console.log(narcissistic(371));
