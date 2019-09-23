// Create an array containing values [1 .. range]
const createIntegerArray = range => [...Array(range + 1).keys()].slice(1);

const sumArray = array => array.reduce((a, b) => a + b);

export const sumOfNaturalSquares = range => sumArray(createIntegerArray(range).map(x => x ** 2));

export const squareOfNaturalSum = range => sumArray(createIntegerArray(range)) ** 2;

export const diffSons = range => squareOfNaturalSum(range) - sumOfNaturalSquares(range);
