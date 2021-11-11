function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}
  
console.log(getIndexToIns([40, 60], 50))


// ** OR **

function getIndexToIns2(arr, num) {
    // sort and find right index
    let index = arr
      .sort((curr, next) => curr - next)
      .findIndex(currNum => num <= currNum);
    // Returns index or total length of arr
    return index === -1 ? arr.length : index;
}
  

console.log(getIndexToIns2([40, 60], 50))