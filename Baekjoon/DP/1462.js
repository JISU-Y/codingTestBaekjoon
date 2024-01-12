/* 1로 만들기 */
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
let pathToOne

rl.on("line", function (line) {
  input.push(line)
}).on("close", function () {
  const [N] = input

  console.log("N", N)

  pathToOne = Array(N + 1).fill(0)

  pathToOne[1] = 0
  pathToOne[2] = 1
  pathToOne[3] = 1

  for (let i = 4; i <= N; i++) {
    pathToOne[i] = pathToOne[i - 1] + 1 // 어떤 수에서 1을 뺀 건 하나의 움직임이니까
    if (i % 2 === 0) pathToOne[i] = Math.min(pathToOne[i], pathToOne[i / 2] + 1) // 그냥 1로 뺀 경로 보다 나눈 게 더 작을 수도 있음.
    if (i % 3 === 0) pathToOne[i] = Math.min(pathToOne[i], pathToOne[i / 3] + 1)
  }

  console.log(pathToOne[N])

  process.exit()
})
