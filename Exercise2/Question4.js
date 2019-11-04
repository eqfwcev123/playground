function numPY(s) {
  const lowerCase = s !== undefined ? [...s.toLowerCase()] : [];

  const countP = lowerCase.reduce((acc, cur) => (cur === 'p' ? acc + 1 : acc), 0);
  const countY = lowerCase.reduce((acc, cur) => (cur === 'y' ? acc + 1 : acc), 0);
  if (countP === countY) {
    return true;
  }
  return false;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
console.log(numPY('ab')); // true
console.log(numPY('')); // true
console.log(numPY()); // true
