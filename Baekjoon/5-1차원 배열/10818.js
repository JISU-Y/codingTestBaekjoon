var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var input = require("fs").readFileSync("input.txt").toString().split("\n");
var N = parseInt(input[0]);
var numbers = input[1].split(" ");

let min = parseInt(numbers[0]);
let max = parseInt(numbers[0]);

for (let i = 1; i < N; i++) {
  if (parseInt(numbers[i]) < min) {
    min = parseInt(numbers[i]);
  }
  if (parseInt(numbers[i]) > max) {
    max = parseInt(numbers[i]);
  }
}

console.log(min, max);
