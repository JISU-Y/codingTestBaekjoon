var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
// var input = require("fs").readFileSync("input.txt").toString().split("\n");

let i = 0;
var a = 0;
var b = 0;

let result = "";

while (1) {
  a = parseInt(input[i].split(" ")[0]);
  b = parseInt(input[i].split(" ")[1]);

  if (a === 0 && b === 0) break;

  result += `${a + b}\n`;
  i++;
}

console.log(result);
