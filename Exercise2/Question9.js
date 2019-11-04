function nextSqaure(n) {
  if (Number.isInteger(Math.sqrt(n))) {
    return (Math.sqrt(n) + 1) ** 2;
  } return 'no';
}

console.log(nextSqaure()); // no
console.log(nextSqaure(0)); // 1
console.log(nextSqaure(1)); // 4
console.log(nextSqaure(2)); // no
console.log(nextSqaure(3)); // no
console.log(nextSqaure(121)); // 144
console.log(nextSqaure(165)); // no
console.log(nextSqaure(400)); // 441
