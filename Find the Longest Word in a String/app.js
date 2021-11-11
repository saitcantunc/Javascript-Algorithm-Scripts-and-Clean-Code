/* Return the length of the longest word in the provided sentence.
Your response should be a number. */

function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(val => val.length))
  }
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

// ** OR **

function findLongestWordLength2(str) {
    return str.split(" ")
    .reduce(function(longest, word) {
        return Math.max(longest, word.length)
    }, 0)
}

console.log(findLongestWordLength2("The quick brown fox jumped over the lazy dog"))