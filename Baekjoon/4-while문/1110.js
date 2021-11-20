var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString()
var input = require("fs").readFileSync("input.txt").toString();
input = parseInt(input);

let count = 1;
let value = input;

while (1) {
  if (value < 10) {
    value = value * 10 + ((Math.floor(value / 10) + (value % 10)) % 10);
  } else {
    value = (value % 10) * 10 + ((Math.floor(value / 10) + (value % 10)) % 10);
  }

  //   sum = Math.floor(num / 10) + num % 10;  // 10 이하와 관계 없이 일단 뒷자리수는 항상 더한 것으로 들어간다
  //   num = (num % 10) * 10 + sum % 10; // 어차피 10으로 나눈 나머지는 나머지고 첫째자리로 넘기려면 10을 곱해주면 된다

  if (input === value) break;
  count++;
}
console.log(count);
