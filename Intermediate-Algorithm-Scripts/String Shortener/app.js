function shorten(string, length, glue = "...") {
	let len = string.length;
	let avrg = Math.floor(len / 2);
	let glueLen = glue.length;
	if (length === 0) {
		return "";
	}
	if (len <= length) {
		return string;
	}
	let start;
	if (length - glueLen >= 2) {
		start = string.slice(0, Math.floor((length - glueLen) / 2));
	} else {
		start = string.slice(0, 1);
	}
	console.log("start: " + start);
	let end = string.slice(-Math.ceil((length - glueLen) / 2));
	console.log("end: " + end);
	const result = start + glue + end;
	if (length <= start.length) {
		return start;
	}
	if (result.length > length) {
		return string.slice(0, len / 2);
	}

	return result;
}

console.log(shorten("The quick brown fox jumps over the lazy dog", 27, "----"));
console.log(shorten("hello world", 5, "----"));
console.log(shorten("hello world", 0, "----"));
