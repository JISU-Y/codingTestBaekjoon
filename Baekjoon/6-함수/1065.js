var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin");
var input = fs.readFileSync("input.txt");
let count = 0;

function isHan(num) {
  let stringNum = String(num);

  if (num < 100) return true;

  let gap = stringNum[0] - stringNum[1];
  for (let i = 1; i < stringNum.length - 1; i++) {
    if (stringNum[i] - stringNum[i + 1] !== gap) return false;
  }
  return true;
}

for (let i = 1; i <= input; i++) {
  if (isHan(i)) count++;
}

console.log(count);

// 남이 한 풀이
for (let i = 1; i <= N; i++) {
  let nArr = String(i);
  if (i < 100) {
    count++;
    continue;
  }
  // 어차피 100이하면 무조건 한수이고
  // 1000은 한수가 아님
  // 그러니 3자리수 일때만 측정하면 된다
  let A = Number(nArr[0]) - Number(nArr[1]);
  let B = Number(nArr[1]) - Number(nArr[2]);
  if (A === B) {
    count++;
  }
}

console.log(count);
