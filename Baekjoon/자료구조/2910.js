/* 빈도 정렬 */
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
  input.push(line.split(" "))
}).on("close", function () {
  const [N, C] = input.shift()

  let numbers = input[0]
  let sortedNumbers = []
  let countObj = new Map()
  let resetNumbers = []

  numbers.forEach((el) => {
    // MAP은 삽입 순서를 보장함
    countObj.set(el, countObj.get(el) > 0 ? countObj.get(el) + 1 : 1)
  })

  sortedNumbers = [...countObj].sort(([aKey, aCount], [bKey, bCount]) => bCount - aCount)

  resetNumbers = sortedNumbers.flatMap((num) => new Array(num[1]).fill(num[0]))

  console.log(resetNumbers.join(" "))

  process.exit()
})
