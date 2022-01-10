/* Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric 
digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits. */

function duplicateCount(text) {
	let result = 0,
		soltingObject = {};
	text
		.toLowerCase()
		.split("")
		.map((str) => {
			if (!soltingObject.hasOwnProperty(str)) {
				soltingObject[str] = 0;
			} else {
				if (soltingObject[str] === 0) {
					result += 1;
				}
				soltingObject[str] = soltingObject[str] + 1;
			}
		});
	return result;
}

console.log(duplicateCount("abcdefghijabcdeABCDabcABa"));

/* OR */

function duplicateCount2(text) {
	var count = text
		.toLowerCase()
		.split("")
		.reduce((accum, curr) => {
			accum[curr] ? (accum[curr] += 1) : (accum[curr] = 1);
			return accum;
		}, {});
	return Object.keys(count).filter((key) => count[key] > 1).length;
}

console.log(duplicateCount2("abcdefghijabcdeABCDabcABa"));

/* OR */

function duplicateCount3(text) {
	return text
		.toLowerCase()
		.split("")
		.filter((item, i, arr) => {
			return arr.indexOf(item) !== i && arr.lastIndexOf(item) === i;
		}).length;
}

console.log(duplicateCount3("abcdefghijabcdeABCDabcABa"));
