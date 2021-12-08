/* Return an English translated sentence of the passed binary string.

The binary string will be space separated. */

function binaryAgent(str) {
    return String.fromCharCode(
      ...str.split(" ").map(function(char) {
        return parseInt(char, 2);
      })
    );
}

console.log(binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
))

// ** OR **

function binaryAgent2(str) {
    
    str = str.split(" ")
    var power;
    var decValue = 0
    var sentence = ""

    for(var s = 0; s < str.length; s++) { // Check each binary number from the array
        for (let t = 0; t < str[s].length; t++) { // This only takes into consideration the active ones
            if (str[s][t] == 1) {   
                power = Math.pow(2, + str[s].length - t - 1)    // This is quivalent to 2 ** position
                decValue += power
            }         
        }

        sentence += String.fromCharCode(decValue) // After the binary number is converted to decimal, convert it to string and store

        decValue = 0  // Reset decimal value for next binary number.
    }

    return sentence;
}

console.log(binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  ))