/* Your task is to write a function maskify, which changes all but the last four characters into '#'. */

function maskify(cc) {
	let len = cc.length - 4;
	cc = cc.slice(-4);
	let newStr = "";
	for (let i = 0; i < len; i++) {
		newStr += "#";
	}
	return newStr.concat(cc);
}

console.log(maskify("4556364607935616"));
