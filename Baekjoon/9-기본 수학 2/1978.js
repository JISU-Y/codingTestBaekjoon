const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("input.txt").toString().split("\n");

const N = parseInt(input[0]);
let number;
let count = 0;
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < N; i++) {
  number = parseInt(input[1].split(" ")[i]);

  if (isPrime(number)) {
    count++;
  }
}

console.log(count);
