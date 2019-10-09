// 15번
let star5 = '';
for (let i = 4; i >= 0; i--) {
  for (let j = 0; j < 5; j++) {
    if (j === i) {
      star5 += '*';
    } else if (j > i) {
      star5 += '**';
    } else {
      star5 += ' ';
    }
  }
  star5 += '\n';
}
console.log(star5);
