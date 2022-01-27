/* Complete the method / function so that it converts dash / underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized(known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior" */

function toCamelCase(str) {
	if (str.includes("-")) {
		str = str.split("-");
	}
	if (str.includes("_")) {
		str = str.split("_");
	}
	let newArr = [str[0]];
	for (let i = 1; i < str.length; i++) {
		var j = str[i].charAt(0).toUpperCase();
		str[i] = j + str[i].substring(1).toLowerCase();
		newArr.push(str[i]);
	}

	return newArr.join("");
}

console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("A-B-C"));
