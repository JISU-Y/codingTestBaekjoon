const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split(" ")
    : fs.readFileSync("input.txt").toString().split(" ");

const M = parseInt(input[0]);
const N = parseInt(input[1]);

// 검색한 prime num 구하는 법
// 숫자의 루트를 씌운 값을 사용하면 약수를 나열했을 때 거의 중간값을 도출하게 된다
// 80 => 1 2 4 5 8 10 16 20 40 80
// 중간값은 8~10 / sqrt(80) = 8.xxxx 이므로
// sqrt(num)값을 포함한 수까지만 소수 계산을 하면 시간이 훨씬 줄어든다 (시간복잡도 루트 N)
const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
  return num > 1;
};

let result = "";
for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    result += `${i}\n`;
  }
}
console.log(result.trim());
