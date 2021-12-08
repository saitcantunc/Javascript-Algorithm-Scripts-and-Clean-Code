/* Return the provided string with the first letter of each 
word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize 
connecting words like the and of. */

function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}


console.log(titleCase("I'm a little tea pot"))

// ** OR **

function titleCase2(str) {
    var convertToArray = str.toLowerCase().split(" ")
    var result = convertToArray.map(function(val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    })
    return result.join(" ")
}

console.log(titleCase2("I'm a little tea pot"))