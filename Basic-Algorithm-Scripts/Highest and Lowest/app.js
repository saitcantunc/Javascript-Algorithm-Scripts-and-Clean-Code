/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5" */

function highAndLow(numbers) {
	numArr = numbers.split(" ");
	numArr.sort((a, b) => {
		return b - a;
	});
	let maxNum = numArr[0];
	let minNum = numArr[numArr.length - 1];

	return `${maxNum} ${minNum}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
