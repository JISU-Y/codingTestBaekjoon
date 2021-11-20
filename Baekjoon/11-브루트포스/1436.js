const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs.readFileSync("input.txt").toString().trim();
input = parseInt(input);

let start = 665; // 665 부터 시작
while (input > 0) {
  start++; // 665 부터 계속 증가 시킴
  if (start.toString().includes("666")) {
    // 증가시키는 수가 6을 연속으로 3개 포함시키고 있을 때
    // input하나를 깜
    input--;
    // 그렇게 input이 0이 되면 input번째의 666수가 start에 있게 됨
  }
}
console.log(start);

// 내가 푼 것 맞음
// let count = 0;
// for (let i = 0; i < 10000000; i++) {
//   if (i.toString().includes("666")) {
//     count++;
//     if (count === input) console.log(i);
//   }
// }
