function toWeirdCase(s) {
  const lowerCase = s.toLowerCase();
  let weirdCase = '';
  for (let i = 0; i < lowerCase.length; i++) {
    if (i % 2) {
      weirdCase += lowerCase[i];
    } else {
      weirdCase += lowerCase[i].toUpperCase();
    }
  }
  return weirdCase;
}

console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'
