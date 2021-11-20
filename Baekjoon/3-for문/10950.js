var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
// var input = require("fs").readFileSync("input.txt").toString().split("\n");
var T = parseInt(input[0]);

for (let i = 0; i < T; i++) {
  let numbers = input[i + 1].split(" ");
  console.log(parseInt(numbers[0]) + parseInt(numbers[1]));
}
