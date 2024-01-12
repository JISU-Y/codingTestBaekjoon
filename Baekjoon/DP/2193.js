/* 이친수 */
/* ! 테스트 */
const path = "./input.txt"
const fs = require("fs")

const readline = require("readline")
const rl = readline.createInterface({
  input: fs.createReadStream(path),
  output: process.stdout,
})

// /* ! 제출용 */
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

let input = []

rl.on("line", function (line) {
  input.push(line)
}).on("close", function () {
  const [N] = input

  let count = 0
  // let pinaryNumbers = new Array(Math.pow(2, N)).fill(false)

  for (let i = Math.pow(2, N - 1); i < Math.pow(2, N - 1) + Math.pow(2, N - 2); i++) {
    const currentBiValue = i.toString(2).padStart(N, "0")

    if (!currentBiValue.includes("11")) count++
  }

  console.log(count)

  process.exit()
})

// 답 (BigInt 이용)

// let input = []

// rl.on("line", function (line) {
//   input.push(line)
// }).on("close", function () {
//   const N = Number(input[0])

//   let dp = new Array(N + 1).fill(0n) // BigInt를 위한 'n' 접미사를 사용합니다
//   dp[1] = 1n
//   dp[2] = 1n

//   for (let i = 3; i <= N; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2]
//   }

//   console.log(dp[N].toString()) // BigInt를 문자열로 변환하여 출력합니다

//   process.exit()
// })

// 답: 이중 배열 이용

// let input = []

// rl.on("line", function (line) {
//   input.push(line)
// }).on("close", function () {
//   const N = Number(input[0])

//   const dp = Array.from(Array(N + 1), () => Array(2).fill(0));

//   dp[1][0] = 0;
//   dp[1][1] = 1;

//   for(let i = 2; i <= N; i++) {
//     dp[i][0] = dp[i-1][0] + dp[i-1][1];
//     dp[i][1] = dp[i-1][0];
//   }

//   console.log(dp[N][0] + dp[N][1])

//   process.exit()
// })
