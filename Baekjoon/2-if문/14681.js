// fs 모듈 사용 시 런타임 에러
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 일단 먼저 input 배열 선언
var input = [];

rl.on("line", (line) => {
  // line을 가공하여 변수에 저장
  input.push(parseInt(line)); // input에다가 입력받은 상수를 push
}).on("close", () => {
  // 저장된 변수를 이용하여 계산 후 출력
  var a = input[0];
  var b = input[1];

  if (a > 0 && a <= 1000) {
    if (b > 0 && b <= 1000) {
      console.log("1");
    }
    if (b < 0 && b >= -1000) {
      console.log("4");
    }
  } else if (a < 0 && a >= -1000) {
    if (b > 0 && b <= 1000) {
      console.log("2");
    }
    if (b < 0 && b >= -1000) {
      console.log("3");
    }
  } else {
    return 0;
  }
});
