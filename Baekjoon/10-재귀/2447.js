const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin")
    : fs.readFileSync("input.txt");
input = parseInt(input);

let lines = [];

printStar(input);
console.log(lines.join(""));

function printStar(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      star(i, j, num);
    }
    lines.push("\n");
  }
}

function star(i, j, num) {
  if (i % 3 === 1 && j % 3 === 1) {
    lines.push(" ");
  } else {
    if (num === 1) {
      lines.push("*");
    } else {
      star(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));
    }
  }
}

// 이렇게만 했을 때는 3x3 정사각형에서 가운데(1,1), (1,4), (1,7)... / (4,1) (4,4) ...
// 일 경우는 공백으로 출력하도록 한 알고리즘
// 하지만 이렇게 하면 9이상으로 넘어갈 경우
// (3,3) (3,4) (3,5)
// (4,3) (4,4) (4,5)
// (5,3) (5,4) (5,5)
// 이 부분도 모두 공백 이어야 하는데 그냥 4,4 부분만 공백으로 된다
// 그렇기 때문에 저기에 해당하는 부분 모두 공백으로 처리해야한다
// 그것은 위에 처럼 재귀함수를 불러 i, j, num을 모두 3으로 나눈 수를 모두 1로 만들어 if (i % 3 === 1 && j % 3 === 1) 조건에 걸리도록 한다
// 3으로 나눠줄 때 내림해줘야 한다 그래야 3, 4, 5를 3으로 나누었을 때 모두 1로 만들 수 있기 때문이다
// 마찬가지로 9,9 9,10 ... 도 마찬가지
// function star(i, j, num) {
//   if (i % 3 === 1 && j % 3 === 1) {
//     lines.push(" ");
//   } else {
//     lines.push("*");
//   }
// }
