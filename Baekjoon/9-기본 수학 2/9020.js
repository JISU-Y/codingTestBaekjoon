const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("input.txt").toString().split("\n");

const T = parseInt(input[0]);

// 2부터 10000까지의 숫자 중 소수 구하기
const n = 2;
const m = 10000;
// 에라토스테네스의 체 사용
// 에라토스테네스가 발견한 소수를 찾는 방법이다. 위에서 모든 자연수는 소수들의 곱으로 표현된다고 했다.
// 그래서 에라토스테네스는 주어진 숫자 값의 범위 안에서, 자기 자신을 제외한 배수 값을 지워 나갔다. 결국 소수만 남게 된다.

// 어떤 값을 입력받고 소수를 출력하는 것이 아닌, 입력 받은 숫자 까지의 정수 중 소수의 개수를 구해야 할 때 유용하다.
let prime = [];
for (let i = n; i <= m; i++) {
  prime[i] = i;
}
for (let i = 2; i <= m; i++) {
  if (prime[i] === 0) continue;
  for (let j = i + i; j <= m; j += i) {
    prime[j] = 0;
  }
}
prime = prime.filter((n) => n !== 0);

// 테스트케이스 하나씩 반복
for (let i = 1; i <= T; i++) {
  // 골드바흐 파티션 구하기
  const num = Number(input[i]);
  // 가능한 골드바흐 파티션을 저장할 배열
  let answer = [];
  // 주어진 수의 절반보다 작은 소수만 탐색하면 됨
  for (let j = 0; prime[j] < num / 2 + 1; j++) {
    // (주어진 수 - 소수)가 소수인지
    const index = prime.indexOf(num - prime[j]);
    // 소수라면
    if (index !== -1) {
      // 골드바흐 파티션이므로 배열에 저장
      answer.push([prime[j], prime[index]]);
    }
  }
  // 골드바흐 파티션이 존재했다면
  if (answer.length !== 0) {
    // 가장 마지막 파티션을 가져옴 (두 소수의 차이가 가장 작음)
    const a = answer.pop();
    // 출력
    console.log(`${a[0]} ${a[1]}`);
  }
}

// 내가 푼 것 안됨
// let result = "";
// for (let i = 1; i <= T; i++) {
//   let number = parseInt(input[i]);
//   let goldA = 3,
//     goldB = 3;

//   if (number === 4) {
//     result += `${2} ${2}\n`;
//   } else if (number === 6) {
//     result += `${3} ${3}\n`;
//   } else {
//     while (goldA + goldB !== number) {
//       if (!isPrime(goldA + 2) && !isPrime(goldB + 2)) {
//         if (isPrime(number / 2)) {
//           goldA = number / 2;
//           goldB = number / 2;
//         } else {
//           goldA -= 2;
//           goldB += 4;
//         }
//       } else {
//         if (isPrime(goldA + 2)) {
//           goldA += 2;
//         } else if (isPrime(goldB + 2)) {
//           goldB += 2;
//         }
//       }
//     }
//     result += `${goldA} ${goldB}\n`;
//   }
// }
// console.log(result);
