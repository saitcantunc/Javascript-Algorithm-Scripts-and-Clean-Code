// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    return arr
    .toString()
    .replace(",,", ",") // "1,2,,3" => "1,2,3"
    .split(",") // ['1','2','3']
    .map(function(v) {
        if (v == "[object Object]") {
          return {};
        } else if (isNaN(v)) {
          return v;
        } else {
          return parseInt(v);
        }
    });
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))