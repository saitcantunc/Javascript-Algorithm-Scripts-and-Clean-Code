/* function consecutiveOnes(nums) {}
that takes in array nums and returns the maximum consecutive 1's

For example

consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3
consecutiveOnes([1, 1, 0, 0, 1]) === 2
consecutiveOnes([0, 0, 0, 0, 0]) === 0
PLEASE NOTE THAT THIS KATA HAS HEAVY PERFORMANCE TESTS AND YOU NEED OPTIMIZED CODE TO PASS IT */

function consecutiveOnes(nums) {
	let count = 0;
	var resultCount = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			count++;
		}
		if (nums[i] === 0) {
			count = 0;
		}
		if (count > resultCount) {
			resultCount = count;
		}
	}

	return resultCount;
}

console.log(consecutiveOnes([0, 0, 0, 1, 1]));
console.log(consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]));
console.log(consecutiveOnes([1, 1, 1, 1, 1]));

/* Best Practice in Codewars */

function consecutiveOnes2(a) {
	var result = 0,
		counter = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i] === 1) {
			counter++;
		} else {
			result = Math.max(counter, result);
			counter = 0;
		}
	}
	return Math.max(result, counter);
}

console.log(consecutiveOnes2([0, 0, 0, 1, 1]));
console.log(consecutiveOnes2([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]));
console.log(consecutiveOnes2([1, 1, 1, 1, 1]));
