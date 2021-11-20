var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split('\n');
var input = fs.readFileSync("input.txt").toString().split("\n");

const N = parseInt(input[0]);

// aaabbbcccb

let count = 0;
// 내가 푼 풀이

for (let i = 1; i <= N; i++) {
  let word = input[i].trim();
  let isGroup = true; // 얘를 계속 default로 true로 해줘야 한다
  let letter = [];

  while (word.length > 0) {
    if (!letter.includes(word[0])) {
      letter.push(word[0]);
    } else {
      if (letter.indexOf(word[0]) !== letter.length - 1) {
        isGroup = false;
        break;
      }
    }
    word = word.substring(1, word.length);
  }

  if (isGroup) {
    count++;
  }
}
console.log(count);

// for (let i = 1; i <= N; i++) {
//   let word = input[i];
//   let letter = [];
//   let isGroup = true;

//   for (let j = 0; j < word.length; j++) {
//     if (!letter.includes(word[j])) {
//       console.log(word[j]);
//       letter.push(word[j]);
//     } else {
//       console.log(letter.indexOf(word[0]));
//       if (letter.indexOf(word[j]) !== letter.length - 1) {
//         isGroup = false;
//         break;
//       }
//     }
//   }

//   if (isGroup) {
//     count++;
//   }
// }
// console.log(count);
