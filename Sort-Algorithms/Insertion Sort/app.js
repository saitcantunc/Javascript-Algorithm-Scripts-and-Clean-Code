let insertionSort = (inputArr) => {
	let length = inputArr.length;
	for (let i = 1; i < length; i++) {
		let key = inputArr[i];
		let j = i - 1;
		while (j >= 0 && inputArr[j] > key) {
			inputArr[j + 1] = inputArr[j];
			j = j - 1;
		}
		inputArr[j + 1] = key;
	}
	return inputArr;
};

console.log(insertionSort([1, 12, 123, 3, 5, 7657, 100])); // [1, 3, 5, 12, 100, 123, 7657]
