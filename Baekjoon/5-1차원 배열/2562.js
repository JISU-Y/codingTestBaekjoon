var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var input = require("fs").readFileSync("input.txt").toString().split("\n");

let max = parseInt(input[0]);
let index = 0;

for (let i = 1; i < 9; i++) {
  if (parseInt(input[i]) > max) {
    max = parseInt(input[i]);
    index = i;
  }
}

console.log(max);
console.log(index + 1);
