const evenfib = (limit) => {
  const terms = [0, 2];

  let next = terms[terms.length - 2] + terms[terms.length - 1];
  while (next <= limit) {
    terms.push(next);
    next = terms[terms.length - 2] + terms[terms.length - 1];
  }
  return terms.reduce((a, b) => a + b);
};

export default evenfib;
