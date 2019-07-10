// Naive method to test if a number is prime
export const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
const findprimes = (number) => {
  const largestDivisor = Math.ceil(Math.sqrt(number));
  const divisors = [];

  // Test division by 2
  let next = 0;
  if (number % 2 === 0) {
    divisors.push(2);
    next = number / 2;
    while (next % 2 === 0) {
      divisors.push(2);
      next /= 2;
    }
  }

  // Number was not divisible by 2, so set next equal to number
  if (next === 0 && divisors.length === 0) next = number;

  // At this point number that's left ('next') should not be divisible by 2 anymore
  // Skipping even numbers from loop, because every even number is divisible by 2
  for (let i = 3; i <= largestDivisor; i += 2) {
    if (!isPrime(next) && isPrime(i)) {
      if (next % i === 0) {
        divisors.push(i);
        next /= i;
      }
    }
  }
  if (next !== 1 && isPrime(next)) divisors.push(next);
  return divisors;
};

export default findprimes;
