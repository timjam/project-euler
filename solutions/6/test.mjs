import assert from 'assert';
import {
  sumOfNaturalSquares,
  squareOfNaturalSum,
  diffSons,
} from './solution';

/*
  The sum of the squares of the first ten natural numbers is,
  1^2 + 2^2 + ... + 10^2 = 385

  The square of the sum of the first ten natural numbers is,
  (1 + 2 + ... + 10)2 = 552 = 3025

  Hence the difference between the sum of the squares of the
  first ten natural numbers and the square of the sum is
  3025 − 385 = 2640.
*/

assert(sumOfNaturalSquares(5) === 55);
assert(sumOfNaturalSquares(10) === 385);
assert(sumOfNaturalSquares(15) === 1240);

assert(squareOfNaturalSum(5) === 225);
assert(squareOfNaturalSum(10) === 3025);
assert(squareOfNaturalSum(15) === 14400);

assert(diffSons(5) === 170);
assert(diffSons(10) === 2640);
assert(diffSons(15) === 13160);

// Find the difference between the sum of the squares of
// the first one hundred natural numbers and the square of the sum.

console.log(diffSons(100));
