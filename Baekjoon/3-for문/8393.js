var fs = require("fs");
var input = fs.readFileSync("/dev/stdin");
// var input = require("fs").readFileSync("input.txt");

let result = 0;

for (let i = 1; i <= parseInt(input); i++) {
  result += i;
}

console.log(result);
