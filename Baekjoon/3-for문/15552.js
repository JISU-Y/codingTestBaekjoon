var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
// var input = require("fs").readFileSync("input.txt").toString().split("\n");
var T = parseInt(input[0]);

let result = "";

for (let i = 0; i < T; i++) {
  let numbers = input[i + 1].split(" ");

  result += parseInt(numbers[0]) + parseInt(numbers[1]) + "\n";
}
// javascript에서는 for문 안에 하나씩 출력하면 시간초과가 뜸
// 그래서 result를 string으로 선언하고
// 그 안에 계산한 값 + \n을 하나씩 넣고 for문 종료 후 한번에 출력한다

console.log(result);
