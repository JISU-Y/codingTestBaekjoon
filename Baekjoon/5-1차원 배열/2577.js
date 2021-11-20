var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var input = require("fs").readFileSync("input.txt").toString().split("\n");

// let mult = parseInt(input[0]) * parseInt(input[1]) * parseInt(input[2]);
let mult = `${input[0] * input[1] * input[2]}`;
let answer = "";
let count = 0;

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (parseInt(mult[j]) === i) count++;
  }
  answer += `${count}\n`;
  count = 0;
}
console.log(answer);
