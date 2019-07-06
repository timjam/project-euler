import assert from 'assert';
import evenfib from './solution';

assert(evenfib(2) === 4);
assert(evenfib(8) === 14);
assert(evenfib(40) === 66);

console.log(evenfib(4000000));
