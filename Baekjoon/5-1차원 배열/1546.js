var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var input = fs.readFileSync("input.txt").toString().split("\n");
let subNum = parseInt(input[0]);
let score = input[1].split(" ");

console.log(subNum, score);

let max = parseInt(score[0]);

for (let i = 1; i < subNum; i++) {
  if (parseInt(score[i]) > max) max = parseInt(score[i]);
}

let sum = 0;

for (let i = 0; i < subNum; i++) {
  score[i] = (parseInt(score[i]) / max) * 100;
  sum += score[i];
}

console.log(sum / subNum);
