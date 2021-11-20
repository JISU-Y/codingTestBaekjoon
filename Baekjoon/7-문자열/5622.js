var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString();
// var input = fs.readFileSync("input.txt").toString();
input = [...input];
const number = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];

// 1 => 2s / 0 => 11s
// n => (n+1)s
let result = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < number.length; j++) {
    if (number[j].includes(input[i])) {
      result += j + 3;
    }
  }
}

console.log(result);
