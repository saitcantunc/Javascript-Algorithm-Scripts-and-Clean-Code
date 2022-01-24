function persistence(num) {
	let count = 0;
	while (num.toString().length !== 1) {
		num = num
			.toString()
			.split("")
			.reduce((acc, curr) => acc * curr);
		count++;
	}
	return count;
}

console.log(persistence(123123123));
