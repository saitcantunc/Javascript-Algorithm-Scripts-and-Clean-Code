/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word Book with the word dog, it should be replaced as Dog */

function myReplace(str, before, after) {

    var index = str.indexOf(before) // Find index where before is on string

    if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(o).toUpperCase() + after.slice(1) // Change the after word to be capitalized before we use it
    } else {
        after = after.charAt(0).toLowerCase() + after.slice(1) // Change the after word to be uncapitalized before we use it
    }

    str = str.replace(before, after) // Replace the original str with the edited one

    return str

}
  
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");