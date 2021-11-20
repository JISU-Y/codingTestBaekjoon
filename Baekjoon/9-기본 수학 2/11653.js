const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin")
    : fs.readFileSync("input.txt");
input = parseInt(input);

function leastMultiple(num) {
  let i = 2;
  while (true) {
    if (num % i === 0) return i;
    if (i > num) return -1;
    i++;
  }
}
let i = 0;
while (leastMultiple(input) > 0) {
  console.log(leastMultiple(input));
  input /= leastMultiple(input);
  i++;
}
