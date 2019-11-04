function getCount8() {
  let count = 0;
  for (let i = 0; i <= 10000; i++) {
    const changedI = String(i);
    for (let j = 0; j < changedI.length; j++) {
      if (changedI[j] === '8') {
        count += 1;
      }
    }
  }
  return count;
}

console.log(getCount8());
