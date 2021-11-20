var fs = require("fs");
var input = fs.readFileSync("/dev/stdin");
// var input = require("fs").readFileSync("input.txt");

input = parseInt(input);

let stars = "";

for (let i = 0; i < input; i++) {
  for (let j = 0; j <= i; j++) {
    stars += "*";
  }
  stars += "\n";
}

console.log(stars);
