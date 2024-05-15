/* 01타일 */
/* ! 테스트 */
const path = "./input.txt";
const fs = require("fs");

const readline = require("readline");
const rl = readline.createInterface({
  input: fs.createReadStream(path),
  output: process.stdout,
});

// /* ! 제출용 */
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  4444;
  const N = Number(input[0]);
  let tileList = Array(N + 1).fill(0);

  // 1 2 3 5 8 13
  tileList[1] = 1;
  tileList[2] = 2;

  for (let i = 3; i <= N; i++) {
    const sum = (tileList[i - 1] % 15746) + (tileList[i - 2] % 15746);
    tileList[i] = sum - (sum >= 15746 ? 15746 : 0);
  }

  console.log(tileList[N]);

  process.exit();
});

// 1 -> 1
// 00, 11 -> 2
// 001, 100, 111 -> 3
// 0000, 0011, 1001, 1100, 1111 -> 2 + 3
// 00111, 10011, 11001, 11100, 00100, 00001, 10000, 11111 -> 1 + 7
// 000000, 001111, 100111, 110011, 111001, 111100
// 001100, 001001, 000011, 100100, 110000, 100001, 111111
// -> 2 + 10
// 0011111, 1001111, 1100111, 1110011, 1111001, 1111100
//     0000001,

// 1 2 3 5 8 13 21 34 55 89

// 7을 나눈 나머지로 피보나치를 한 경우
// 나눈 나머지로 계산해도 피보나치가 적용됨.
// 1 2 3 5 1 6 0 6 6 5 4 2 6 1 0 1 1 2 3 5 1 6 0 6 6
