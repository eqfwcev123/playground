// 16번
let star6 = '';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j === i) {
      star6 += '*';
    } else if (j > i) {
      star6 += '**';
    } else {
      star6 += ' ';
    }
  }
  star6 += '\n';
}
console.log(star6);
