const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split(" ")
    : fs.readFileSync("input.txt").toString().split(" ");

const x = parseInt(input[0]);
const y = parseInt(input[1]);
const w = parseInt(input[2]);
const h = parseInt(input[3]);

const counters = [x, y, w - x, h - y];

console.log(Math.min.apply(null, counters));
// Math.min(x, y, w - x, h - y) // 요롷게 할 수도 있다
// 배열의 최소값 구하기
// Math.min.apply(null, array)
// 최대값
// Math.max.apply(null, array)
// apply의 첫번째 인자가 null이면 context는 window

// 내가 푼 것
// let min = 0;

// if (x < w / 2) {
//   min = x;
//   if (y < h / 2) {
//     min = y;
//   } else {
//     min = h - y;
//   }
// } else {
//   min = w - x;
//   if (y < h / 2) {
//     min = y;
//   } else {
//     min = h - y;
//   }
// }
