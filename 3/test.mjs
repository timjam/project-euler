import assert from 'assert';
import findprimes from './solution';

assert(findprimes(16).sort().toString() === [2, 2, 2, 2].sort().toString());
assert(findprimes(130).sort().toString() === [2, 5, 13].sort().toString());
assert(findprimes(13195).sort().toString() === [5, 7, 13, 29].sort().toString());
