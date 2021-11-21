// What is the 10 001st prime number?

function isPrime(n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    for (let i = 2; i * i <= n; ++ i) {
        if (n % i == 0) return false;
    }
    return true;
}

function findNthPrime(N) {
    if (N == 1) return 2;
    if (N == 2) return 3;
    let prime = 3;
    let i = 2;
    while (i < N) {
      do {
          prime += 2;
      } while (!isPrime(prime));
      i ++;
    }
    return prime;
  }
  console.log(findNthPrime(10001));