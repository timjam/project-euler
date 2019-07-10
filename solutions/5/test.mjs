import assert from 'assert';
import smallestMultiple from './solution';

assert(smallestMultiple(4) === 12);
assert(smallestMultiple(10) === 2520);

// What is the smallest positive number that is evenly divisible
// by all of the numbers from 1 to 20?
console.log(smallestMultiple(20));
