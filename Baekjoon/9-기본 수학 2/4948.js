const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("input.txt").toString().split("\n");

let number;

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
  return num > 1;
};

let i = 0;

while (parseInt(input[i]) !== 0) {
  let count = 0;
  number = parseInt(input[i++]);
  for (let j = number + 1; j <= 2 * number; j++) {
    if (isPrime(j)) {
      count++;
    }
  }
  console.log(count);
}
