/* 121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square */

function findNextSquare(sq) {
	if (Number.isInteger(Math.sqrt(sq))) {
		for (let i = sq + 1; i >= sq; i++) {
			if (Number.isInteger(Math.sqrt(i))) {
				return i;
			}
		}
	}
	return -1;
}

console.log(findNextSquare(319225));
