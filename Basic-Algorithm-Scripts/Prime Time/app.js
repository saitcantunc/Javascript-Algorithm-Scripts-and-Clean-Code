/* We need prime numbers and we need them now!

Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

For example,

11 => [2, 3, 5, 7, 11] */

function prime(num) {
	let newArr = [];
	for (let i = 2; i <= num; i++) {
		var count = 0;
		for (let j = 2; j < i; j++) {
			if (i % j == 0) {
				count++;
			}
		}
		if (count == 0) {
			newArr.push(i);
		}
	}
	return newArr;
}

console.log(prime(23));
console.log(prime(1));
console.log(prime(0));
