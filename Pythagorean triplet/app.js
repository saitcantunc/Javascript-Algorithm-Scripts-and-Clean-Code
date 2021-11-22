/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = 3^2
For example, 32 + 42 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc. */

var a = 1;
var b = 2;
var c = Math.sqrt(a*a + b*b);
var sum = a+b+c;
while(sum != 1000){
    if(sum > 1000){
        a++;
        b = a+1;
    } else {
        b++;
    }
    c = Math.sqrt(a*a + b*b);
    sum = a + b + c;
}

console.log('a:' + a + '  b:' + b + '  c:' + c);
console.log(a*b*c);


/* OR */

function solution(n) {

    for (var c = Math.floor(n / 3 + 1); c < n / 2; c++) {
  
      var sqa_b = c * c - n * n + 2 * n * c
      var a_b = Math.floor(Math.sqrt(sqa_b));
  
      if (a_b * a_b == sqa_b) {
        var b = (n - c + a_b) / 2;
        var a = n - b - c;
        return a * b * c;
      }
    }
    return -1
}
console.log(solution(1000));