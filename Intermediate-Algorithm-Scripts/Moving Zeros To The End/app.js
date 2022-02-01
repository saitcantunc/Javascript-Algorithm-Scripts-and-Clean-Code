/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

var moveZeros = function (arr) {
	let newArr = [];
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			newArr.push(arr[i]);
		} else {
			count++;
		}
	}
	for (let j = 0; j < count; j++) {
		newArr.push(0);
	}
	return newArr;
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

/* best practice */

const moveZeros2 = function (arr) {
	return arr
		.filter(function (x) {
			return x !== 0;
		})
		.concat(
			arr.filter(function (x) {
				return x === 0;
			})
		);
};

console.log(moveZeros2([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
