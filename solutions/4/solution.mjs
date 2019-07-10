const findLargestPalindrome = (digits) => {
  const range = [10 ** (digits - 1), (10 ** digits) - 1];
  const palindromeMultiples = [];

  for (let i = range[0]; i < range[1] + 1; i += 1) {
    for (let j = range[0]; j < range[1] + 1; j += 1) {
      const multiple = i * j;
      if (multiple.toString() === multiple.toString().split('').reverse().join('') && palindromeMultiples.indexOf(multiple) === -1) {
        palindromeMultiples.push(multiple);
      }
    }
  }

  return Math.max(...palindromeMultiples);
};

export default findLargestPalindrome;
