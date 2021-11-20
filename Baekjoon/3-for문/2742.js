var fs = require("fs");
var input = fs.readFileSync("/dev/stdin");
// var input = require("fs").readFileSync("input.txt");
input = parseInt(input);

let answer = "";

while (input !== 0) {
  answer += input + "\n";
  input--;
}

console.log(answer);
