/* Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9]. */

function flattenAndSort(array) {
	return [].concat(...array).sort((a, b) => a - b);
}

console.log(flattenAndSort([[111, 999], [222], [333], [444], [888], [777], [666], [555]]));
