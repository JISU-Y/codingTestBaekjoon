var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
var input = fs.readFileSync("input.txt").toString().trim().split(" ");
// 앞뒤로 공백을 자르는 trim을 추가해보자
// 여기서는 input에서 앞 뒤의 공백을 허용하므로 먼저 trim을 해주고 split으로 나눈다

let count = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i].length > 0) count++;
}

console.log(count);
