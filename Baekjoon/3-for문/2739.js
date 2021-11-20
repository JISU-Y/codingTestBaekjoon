var fs = require("fs");
var input = fs.readFileSync("/dev/stdin");
// var input = require("fs").readFileSync("input.txt")

input = parseInt(input);

for (let i = 1; i <= 9; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
