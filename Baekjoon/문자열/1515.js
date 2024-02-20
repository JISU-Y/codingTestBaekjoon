/* 수 이어 쓰기 */
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

const MAX = 30000 // 3000까지라길래 3000으로 잡았는데 틀림;;

rl.on("line", function (line) {
  input.push(line)
}).on("close", function () {
  const numList = input[0]

  let pointer = 0
  let currentNum = 0

  while (currentNum++ <= MAX) {
    const splitCurNum = currentNum.toString().split("")

    for (const num of splitCurNum) {
      if (num === numList[pointer]) {
        pointer++
      }
    }

    if (pointer === numList.length) break
  }

  console.log(currentNum)

  process.exit()
})

// 234092
// 234 09 2 => 2,3,4,10,19,20
// 9 9 9 9 09 => 9,19,29,39,40,49
// 8 234 0329 9 23 => 8,12,13,14,20,23,24,29,39,42,43
// 3 2 09 8 2 2 1 => 3,12,20,29,38,42,52,61
// 1 (1)(11)(1)(1)(1) => 1,10,11,12,13,14
