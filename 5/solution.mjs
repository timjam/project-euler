import { isPrime } from '../3/solution';

// This function checks how many times a number can be divided
// with each prime up to the number itself. Every time the number
// or its dividend can be divided by a prime, the prime is pushed
// to an array. The resulting array will contain the number's every
// prime factor.
const factorToPrimes = (number) => {
  let next = 0;
  const factors = [];
  for (let i = 2; i <= number; i += 1) {
    if (isPrime(i) && number % i === 0) {
      factors.push(i);
      next = number / i;
      while (next % i === 0) {
        factors.push(i);
        next /= i;
      }
    }
  }
  return factors;
};

// Calculate how many times each element occurs in
// iPrimeFactors array. Occurence value is the power of
// that prime
const findPowers = array => array.reduce((acc, curr) => {
  if (typeof acc[curr] === 'undefined') {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }
  return acc;
}, {});

// This solution is finding the Least Common Multiple through prime factorization.
// The LCM will be the product of multiplying the highest power of each
// prime number together, when a set of number is factored to their primes.
const smallestMultiple = (maxRange) => {
  // This is our main object that tracks the highest power of each element
  // or simply highest power of each prime, because all non-prime elements
  // will be factored to their prime factors
  const powerObject = {};

  // Here each element is checked
  // If it's prime already, the respective key in powerObject will be set
  // to 1
  for (let i = 1; i <= maxRange; i += 1) {
    if (isPrime(i)) {
      powerObject[i] = 1;
    } else {
      const iprimeFactors = factorToPrimes(i);
      const occurenceObject = findPowers(iprimeFactors);

      // Check if the occurence count of i in occurenceObject is higher
      // than what's already in powerObject. If yes, then set the value
      // of i in powerObject to the value of i in occurenceObject
      Object.keys(occurenceObject).forEach((key) => {
        const value = occurenceObject[key];
        if (!powerObject[key] || value > powerObject[key]) {
          powerObject[key] = value;
        }
      });
    }
  }

  // Raise each key from powerObject to the power of its value
  // and multiply them together
  return Object.keys(powerObject).reduce(
    (previous, key) => previous * (parseInt(key, 10) ** powerObject[key]), 1,
  );
};

export default smallestMultiple;
