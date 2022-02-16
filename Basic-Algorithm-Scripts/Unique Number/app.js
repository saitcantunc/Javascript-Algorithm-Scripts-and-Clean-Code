/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 */

function findUniq(arr) {
	arr = arr.sort((a, b) => a - b);
	let len = arr.length;
	let midLen = Math.floor(len / 2);
	if (arr[midLen] !== arr[0]) {
		return arr[0];
	}
	return arr[len - 1];
}

console.log(findUniq([1, 0, 0]));

/* Best Solution */

function findUniq2(arr) {
	arr.sort((a, b) => a - b);
	return arr[0] == arr[1] ? arr.pop() : arr[0];
}

console.log(findUniq([4, 4, 4, 3, 4, 4, 4, 4]));
