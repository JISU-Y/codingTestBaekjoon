var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var input = require("fs").readFileSync("input.txt").toString().split("\n");

let i = 0;
var a = 0;
var b = 0;

while (input[i]) {
  a = parseInt(input[i].split(" ")[0]);
  b = parseInt(input[i].split(" ")[1]);

  console.log(`${a + b}`);
  i++;
}
