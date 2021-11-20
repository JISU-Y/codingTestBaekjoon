var fs = require("fs");
var input = fs.readFileSync("/dev/stdin");
// var input = require("fs").readFileSync("input.txt");

let answer = "";
let i = 0;

while (i++ !== parseInt(input)) {
  answer += i + "\n";
}

console.log(answer);
