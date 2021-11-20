const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("input.txt").toString().split("\n");

const T = parseInt(input[0]);
let choX, choY, choR;
let baekX, baekY, baekR;
for (let i = 1; i <= T; i++) {
  choX = parseInt(input[i].split(" ")[0]);
  choY = parseInt(input[i].split(" ")[1]);
  choR = parseInt(input[i].split(" ")[2]);
  baekX = parseInt(input[i].split(" ")[3]);
  baekY = parseInt(input[i].split(" ")[4]);
  baekR = parseInt(input[i].split(" ")[5]);

  const dx = choX - baekX;
  const dy = choY - baekY;
  if (choR > baekR) {
    // 큰원 정하기
    const temp = choR;
    choR = baekR;
    baekR = temp;
  }

  const rSum = (choR + baekR) * (choR + baekR);
  const rSub = (baekR - choR) * (baekR - choR);
  let d = dx * dx + dy * dy; // 중점 간의 거리

  // 원이 두 점에서 만나는 경우 (두 점) r2-r1 < d < r1+r2
  if (d < rSum && d > rSub) {
    console.log(2);
  } else if (d === rSum || (d === rSub && d !== 0)) {
    // 두 원이 외접하는 경우(한 점) (d = r1 + r2)
    // 두 원이 내접 (한 점) (d=r2-r1 && d!==0)
    console.log(1);
  } else if (d < rSub || d > rSum) {
    // 하나의 원 안에 다른 원이 있어서 못 만나는 경우 (d <r2-r1)
    // 두 원이 멀리 떨어져 못 만나는 경우 (d > r1+r2)
    console.log(0);
  } else if (d === 0 && choR === baekR) {
    // 두 원이 일치하는 경우 (d === 0 이고 반지름이 같을 때)
    console.log(-1);
  }
}
