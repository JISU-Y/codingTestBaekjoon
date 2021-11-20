const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin")
    : fs.readFileSync("input.txt");

input = parseInt(input);

console.log((Math.PI * input * input).toFixed(6));
console.log(2 * input * input);
