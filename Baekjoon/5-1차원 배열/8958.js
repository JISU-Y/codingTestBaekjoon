var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var input = fs.readFileSync("input.txt").toString().split("\n");
let N = parseInt(input[0]);

for (let i = 1; i <= N; i++) {
  let count = 0;
  let sum = 0;

  console.log(input[i].length);
  console.log(input[i]);

  // 이거 10아니고 11로 나오지만
  // input[i].length - 1로 풀면 틀림
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    // input[i][j] === 'O' ? count++ : count=0
    sum += count;
  }
  //   console.log(sum);
}

// for (let i = 1; i <= N; i++) {
//     let count = 1;
//     let sum = 0;

//     for (let j = 0; j < input[i].length; j++) {
//       if (input[i][j] === "X") {
//         // count 초기화
//         count = 0;
//       }
//       console.log(input[i][j], count);
//       // O가 계속될 수록 1점씩 증가해서 더함
//       sum += count++;
//     }
//     console.log(sum);
//   }
