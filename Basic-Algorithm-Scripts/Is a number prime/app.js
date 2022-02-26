/* Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out.
Numbers go up to 2 ^ 31(or similar, depends on language version). 
Looping all the way up to n, or n / 2, will be too slow. */

function isPrime(num) {
	if (num < 2) {
		return false;
	}

	if (num === 2) {
		return true;
	}

	const maxDiv = Math.sqrt(num) + 1;

	for (let i = 2; i < maxDiv; i++) {
		if (num % i === 0) {
			return false;
		}
	}

	return true;
}

console.log(isPrime(73));
console.log(isPrime(2));
console.log(isPrime(34));
