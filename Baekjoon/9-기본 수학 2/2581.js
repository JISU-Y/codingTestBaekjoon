const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("input.txt").toString().split("\n");

const M = parseInt(input[0]);
const N = parseInt(input[1]);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let sum = 0,
  min = 0;
for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    if (sum === 0) min = i;
    sum += i;
  }
}

if (sum === 0 || min === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(min);
}
