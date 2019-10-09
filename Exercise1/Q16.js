// 16번
let star = '';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j === i) {
      star += '*';
    } else if (j > i) {
      star += '**';
    } else {
      star += ' ';
    }
  }
  star += '\n';
}
console.log(star);


const line = 10;
let star2 = '';
for (let i = 0; i < line; i++) {
  // empty space
  for (let j = 0; j < i; j++) {
    star2 += ' ';
  }
  // single star
  for (let k = i; k >= i; k--) {
    star2 += '*';
  }
  // double star
  for (let l = line - 1; l > i; l--) {
    star2 += '**';
  }
  star2 += '\n';
}
console.log(star2);
