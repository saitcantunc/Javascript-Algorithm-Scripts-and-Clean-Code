function alphabetPosition(text) {
	var result = "";
	for (var i = 0; i < text.length; i++) {
		var code = text.toUpperCase().charCodeAt(i);
		if (code > 64 && code < 91) result += code - 64 + " ";
	}

	return result.slice(0, result.length - 1);
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));

/* best practice */

function alphabetPosition2(text) {
	return text
		.toUpperCase()
		.match(/[a-z]/gi)
		.map((c) => c.charCodeAt() - 64)
		.join(" ");
}
