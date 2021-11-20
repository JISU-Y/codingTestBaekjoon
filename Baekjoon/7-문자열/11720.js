var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split('\n');
var input = fs.readFileSync("input.txt").toString().split("\n");

let N = parseInt(input[0]);

let result = 0;
for (let i = 0; i < N; i++) {
  result += parseInt(input[1][i]);
}

console.log(result);
