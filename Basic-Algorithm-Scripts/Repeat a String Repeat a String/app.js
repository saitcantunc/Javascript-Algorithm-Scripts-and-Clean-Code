/* Repeat a given string str (first argument) for num times 
(second argument). Return an empty string if num is not a
positive number. For the purpose of this challenge, do not 
use the built-in .repeat() method. */

function repeatStringNumTimes(str, num) {
    var newStr = ""
    for (let i = 0; i < num; i++) {
    newStr += str
}
return newStr;
}
  
console.log(repeatStringNumTimes("abc", 3))

// ** OR **

function repeatStringNumTimes2(str, num) {
    return num > 0 ? str + repeatStringNumTimes2(str, num - 1) : '';
}

console.log(repeatStringNumTimes2("abc", 3))