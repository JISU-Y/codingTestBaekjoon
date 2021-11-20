var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
// var input = require("fs").readFileSync("input.txt").toString().split("\n");
var T = parseInt(input[0]);

let result = "";

for (let i = 0; i < T; i++) {
  let numbers = input[i + 1].split(" ");

  result +=
    `Case #${i + 1}: ` + (parseInt(numbers[0]) + parseInt(numbers[1])) + "\n";
}

console.log(result);
