/* strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta" */

function longestConsec(strarr, k) {
	if (strarr.length == 0 || k > strarr.length || k <= 0) return "";

	let longStr = "";

	let newStr = "";

	for (let i = 0; i < strarr.length; i++) {
		newStr = strarr.slice(i, i + k);
		if (newStr.join("").length > longStr.length) {
			longStr = newStr.join("");
		}
	}

	return longStr;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
console.log(longestConsec([], 3));
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
