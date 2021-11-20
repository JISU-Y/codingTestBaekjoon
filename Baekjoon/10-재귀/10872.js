const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin")
    : fs.readFileSync("input.txt");
input = parseInt(input);

let result = 1;

function facto(num) {
  result *= num;
  if (num > 1) {
    facto(--num);
  }
  return result;
}

if (input === 0) {
  facto(1);
} else {
  facto(input);
}

console.log(result);
