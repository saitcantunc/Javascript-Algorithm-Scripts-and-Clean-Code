// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
	let len = ending.length;

	if (str.substr(str.length - len) === ending) {
		return true;
	}

	return false;
}

solution("abcde", "cde"); // true
