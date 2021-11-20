const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("input.txt").toString().split("\n");

const testNumber = parseInt(input[0]);
let x;
let y;
let gap = [];

for (let i = 1; i <= testNumber; i++) {
  x = parseInt(input[i].split(" ")[0]);
  y = parseInt(input[i].split(" ")[1]);
  gap.push(y - x);
}

// 거리 = Max * Max 일 때, 이동 횟수 = Max * 2 - 1
// Max * Max < 거리 <= Max * Max + Max 일때, 이동횟수 = Max * 2
// Max * Max + Max < 거리 일때, 이동횟수 = Max * 2 + 1

for (let i = 0; i < testNumber; i++) {
  let max = 0;
  let move = 0;
  while (true) {
    if (gap[i] <= max * (max + 1)) break;
    max++;
  }

  if (gap[i] <= max * max) {
    move = max * 2 - 1;
  } else {
    move = max * max;
  }
  console.log(move);
}
