const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin")
    : fs.readFileSync("input.txt");
N = parseInt(input);

let five = 0;
let three = 0;

while (true) {
  if (N % 5 === 0) {
    // 5로 나누어 떨어지는 수라면, 그게 가장 적은 봉지 수 일테니까
    // 그대로 five만 출력
    // 혹은 3kg 봉지를 계속 계산하다가 0이 되면 three를 출력
    five = N / 5;
    console.log(five + three);
    break;
  }
  if (N < 0) {
    // 3kg를 세다가 음수가 나오면 3과5로 맞출 수 없는 양이므로  -1 출력
    console.log(-1);
    break;
  }
  // 5로 나누어 떨어지지 않는 수라면, 3으로 나눠봐야하는데
  // 이렇게 3을 빼주면서 3kg 봉지 개수를 하나씩 추가해본다
  N -= 3;
  three++;
}
