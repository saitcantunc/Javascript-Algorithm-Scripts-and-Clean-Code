/* "ATTGC" --> "TAACG"
"GTAT" --> "CATA"
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T] */

function DNAStrand(dna) {
	dna = dna.split("");
	let newArr = [];
	let i;
	for (i = 0; i < dna.length; i++) {
		if (dna[i] === "A") {
			newArr.push("T");
		}
		if (dna[i] === "T") {
			newArr.push("A");
		}
		if (dna[i] === "G") {
			newArr.push("C");
		}
		if (dna[i] === "C") {
			newArr.push("G");
		}
	}

	return newArr.join("");
}

console.log(DNAStrand("ATTGC"));

/* Best Practice */

var pairs = { A: "T", T: "A", C: "G", G: "C" };

function DNAStrand2(dna) {
	return dna
		.split("")
		.map((v) => pairs[v])
		.join("");
}

console.log(DNAStrand2("ATTGC"));
