//Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num

function sumPrimes(num) {

    let primes = [];

    for (let i = 2; i <= num; i++) {
      if (primes.every((prime) => i % prime !== 0))
        primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
}


console.log(sumPrimes(977))