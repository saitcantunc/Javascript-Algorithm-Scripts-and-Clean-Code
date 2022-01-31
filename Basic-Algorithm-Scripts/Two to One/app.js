/* Take 2 strings s1 and s2 including only letters from ato z.Return a new sorted string, the longest possible,
    containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
 */

function longest(s1, s2) {
	let s = s1.concat(s2).split("").sort();

	return [...new Set(s)].join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));
