function oddRow(n) {
	let firstItem = n * (n - 1) + 1;
	let newArr = [firstItem];
	for (let i = 1; i < n; i++) {
		firstItem = firstItem + 2;
		newArr.push(firstItem);
	}
	return newArr;
}

console.log(oddRow(13));
