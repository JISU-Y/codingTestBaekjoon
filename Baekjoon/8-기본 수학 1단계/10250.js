const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("input.txt").toString().split("\n");

const tests = parseInt(input[0]);

for (let i = 1; i <= tests; i++) {
  let test = input[i].split(" ");
  let H = parseInt(test[0]); // 층수
  let W = parseInt(test[1]); // 칸수
  let N = parseInt(test[2]); // 몇번째 손님인지

  let room = "";
  let floor = "";

  //   room = Math.ceil(N / H) < 10 ? `0${Math.ceil(N / H)}` : Math.ceil(N / H);
  room = Number.isInteger(N / H)
    ? N / H < 10
      ? `0${N / H}`
      : N / H
    : Math.ceil(N / H) < 10
    ? `0${Math.ceil(N / H)}`
    : Math.ceil(N / H);

  floor = N % H === 0 ? H : `${N % H}`;

  console.log(floor + room);
}
