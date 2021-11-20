var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
// var input = require("fs").readFileSync("input.txt").toString().split("\n");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

function separateFloor(num) {
  const hundred = Math.floor(num / 100);
  const ten = Math.floor((num - hundred * 100) / 10);
  const one = num % 10;

  return [hundred, ten, one];
}

var a_seperated = separateFloor(a);
var b_seperated = separateFloor(b);

// console.log(a_seperated);
// console.log(b_seperated);

console.log(a * b_seperated[2]);
console.log(a * b_seperated[1]);
console.log(a * b_seperated[0]);
console.log(a * b);
