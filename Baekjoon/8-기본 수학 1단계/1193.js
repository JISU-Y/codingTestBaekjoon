var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin");
var input = fs.readFileSync("input.txt");
input = parseInt(input);

// const fs = require("fs");
// const input = (
//   process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `14`
// ).trim();

// 1  2  6  7  15
// 3  5  8  14
// 4  9  13
// 10 12
// 11

let sum = 0,
  line = 1;

while (true) {
  sum += line;
  if (input <= sum) {
    // input이 몇번째 라인인지 확인
    let a = line - (sum - input); // sum - input이 그 라인에서 몇번째 data인지 확인
    let b = line + 1 - a; // a + b = line + 1 이니까
    if (line % 2 === 0) {
      console.log(`${a}/${b}`);
    } else {
      console.log(`${b}/${a}`);
    }
    break;
  }
  line++;
}
