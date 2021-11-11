function reverseString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
  }
  
console.log(reverseString("hello"))

// ** OR **

function reverseString2(str) {
    return str
        .split("")
        .reverse()
        .join("")
}

console.log(reverseString2("Hi"))

// ** OR ** 

function reverseString3(str) {
    let reve = [...str].reduce((acc, char) => char + acc);
    return reve
}

console.log(reverseString("Türkiye"))