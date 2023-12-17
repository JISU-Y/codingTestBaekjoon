const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("input.txt").toString().split("\n");
const N = parseInt(input[0].split(" ")[0]);
const M = parseInt(input[0].split(" ")[1]);

const whiteFirst = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];
const blackFirst = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function whiteFirstPaint(y, x) {
  // w가 왼쪽위에 첫 칸일때
  let counter = 0;

  for (let i = y; i < y + 8; i++)
    for (let j = x; j < x + 8; j++)
      if (input[i][j] !== whiteFirst[i - y][j - x]) counter++;

  return counter;
}

function blackFirstPaint(y, x) {
  // b가 왼쪽위에 첫 칸일때
  let counter = 0;

  for (let i = y; i < y + 8; i++)
    for (let j = x; j < x + 8; j++)
      if (input[i][j] !== blackFirst[i - y][j - x]) counter++;

  return counter;
}

const minArr = []; // 칠해야할 칸의 수를 저장하는 배열 / 나중에 여기서 min 값을 골라서 출력할 것임
for (let i = 0; i + 7 <= N; i++) {
  for (let j = 0; j + 7 < M; j++) {
    minArr.push(whiteFirstPaint(i, j));
    minArr.push(blackFirstPaint(i, j));
  }
}

console.log(Math.min.apply(null, minArr));
// 다시!!!!!!!!! 이해 안감 ㅠㅠㅠ
