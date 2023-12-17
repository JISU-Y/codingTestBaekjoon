const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("input.txt").toString().split("\n");
const N = parseInt(input[0].split(" ")[0]);
const M = parseInt(input[0].split(" ")[1]);

let numbers = [];
for (let i = 0; i < N; i++) {
  numbers.push(parseInt(input[1].split(" ")[i]));
}

let max = 0;
let sum = 0;
for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      sum = numbers[i] + numbers[j] + numbers[k];
      if (sum <= M) {
        if (max < sum) {
          max = sum;
        }
      }
    }
  }
}

console.log(max);
