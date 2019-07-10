import assert from 'assert';
import evenfib from './solution';

assert(evenfib(2) === 4);
assert(evenfib(8) === 14);
assert(evenfib(40) === 66);

// By considering the terms in the Fibonacci sequence whose values do
// not exceed four million, find the sum of the even-valued terms.
console.log(evenfib(4000000));
