function confirmEnding(str, target) {
    return str.indexOf(target, str.length - target.length) !== -1;
}
  
console.log(confirmEnding("Bastian", "an"))