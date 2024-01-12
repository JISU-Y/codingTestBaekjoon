/* 돌 게임 */
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

  console.log("N", N)

  console.log(stoneGame(N))

  process.exit()
})

function stoneGame(n) {
  let stone = Array(n + 1).fill("CY")

  stone[1] = "SK"
  stone[2] = "CY"
  stone[3] = "SK"

  for (let i = 4; i <= n; i++) {
    // 아마 그냥 홀짝 구별해서 CY / SK 넣어도 될 듯.
    // i 번째의 바로 전 게임이 SK가 이긴 게임이면 (홀수라면)
    if (stone[i - 1] === "SK" || stone[i - 3] === "SK") {
      stone[i] = "CY" // 지금 이 게임은 CY가 이길 차례 (짝수란 얘기)
    } else {
      stone[i] = "SK" // 그게 아니라면 (원래 홀수라면)
    }
  }

  return stone[n]
}

// 1 (1)
// 2 (1/1)
// 3 (3)
// 4 (1/3) (1/1/1/1)
// 5 (1/1/3)
// 6 (1/1/1/1/1/1) (1/1/1/3) (3/3)
// 7 (1/1/1/1/1/1/1) (1/1/1/1/3) (1/3/3)
// 8 (1/1/1/1/1/1/1/1) (1/1/1/1/1/3) (1/1/3/3)
// 9 (1/1/1/1/1/1/1/1/1) (1/1/1/1/1/1/3) (1/1/1/3/3) (3/3/3)
// 10 (1/1/1/1/1/1/1/1/1/1) (1/1/1/1/1/1/1/3) (1/1/1/1/3/3) (1/3/3/3)
