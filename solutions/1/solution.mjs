const findMultiples = (number, divider) => {
  const multiples = [];
  for (let i = 0; i < number; i += 1) {
    if (i % divider === 0) {
      multiples.push(i);
    }
  }
  return multiples;
};

const sumofmultiplesbelow = (number) => {
  const multiplesofthree = findMultiples(number, 3);
  const multiplesoffives = findMultiples(number, 5);

  const sumofthrees = multiplesofthree.reduce((a, b) => a + b, 0);
  const sumoffives = multiplesoffives.reduce((a, b) => a + b, 0);

  return sumofthrees + sumoffives;
};

export default sumofmultiplesbelow;
