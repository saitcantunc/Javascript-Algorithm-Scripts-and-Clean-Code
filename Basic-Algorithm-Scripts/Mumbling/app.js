/* Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */

function accum(s) {
	var arr = s.toUpperCase().split("");
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i] + arr[i].repeat(i).toLowerCase());
	}

	return newArr.join("-");
}

console.log(accum("ZpglnRxqenU"));

/* OR */

function accum2(s) {
	return s
		.split("")
		.map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
		.join("-");
}

console.log(accum2("ZpglnRxqenU"));
