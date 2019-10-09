// 1번
console.log('------');
let x = 15;
if (x > 10 && x < 20) {
  console.log(x);
}

// 2번
console.log('------');
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3번
console.log('------');
let str = '';
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    str += i;
  }
}
console.log(str);

// 4번
console.log('------');
for (let i = 10; i > 0; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 5번
console.log('------');
let i = 0;
while (i < 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i += 1;
}


// 6번
console.log('------');
let j = 10;
while (j > 1) {
  if (j % 2 !== 0) {
    console.log(j);
  }
  j -= 1;
}

// 7번
console.log('------');
let count = 0;
for (let i = 0; i < 10; i++) {
  count += i;
}
console.log(count);


// 8 번 
console.log('------');
let count2 = 0;
for (let i = 0; i < 20; i++) {
  if (i % 2 !== 0 || i % 3 !== 0) {
    count2 += i;
  }
}
console.log(count2);


// 9번
console.log('------');
let count3 = 0;
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    count3 += i;
  }
}
console.log(count3);

// 10번
console.log('------');
let dice1 = [1, 2, 3, 4, 5, 6];
let dice2 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < dice1.length; i++) {
  for (let j = 0; j < dice2.length; j++) {
    if (dice1[i] + dice2[j] === 6) {
      console.log('[' + dice1[i] + ',' + dice2[j] + ']');
    }
  }
}

// 11번
console.log('------');
let star = '';
for (let i = 0; i < 5;i++) {
  for (let j = 0; j < 5; j++) {
    if (j <= i) {
      star += '*';
    }
  }
  star += '\n';
}
console.log(star);

// 12번
console.log('------')
let star2 = '';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j >= i) {
      star2 += '*';
    } else {
      star2 += ' ';
    }
  }
  star2 += '\n';
}
console.log(star2);

// 13번
console.log('------');
let star3 = '';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j >= i) {
      star3 += '*';
    }
  }
  star3 += '\n';
}
console.log(star3);

// 14번
console.log('------');
let star4 = '';
for (let i = 4; i >= 0; i--) {
  for (let j = 0; j < 5; j++) {
    if (j >= i) {
      star4 += '*';
    } else {
      star4 += ' ';
    }
  }
  star4 += '\n';
}
console.log(star4);

// 15번
console.log('------');
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

// 16번
console.log('------');
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
