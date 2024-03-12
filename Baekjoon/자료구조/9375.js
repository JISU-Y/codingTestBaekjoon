/* 패션왕 신해빈 */
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
  const testcases = input.shift()
  let answer = []

  for (let i = 0; i < input.length - 1; ) {
    const clothes = Number(input[i])

    let closet = {}

    for (let j = 1; j <= clothes; j++) {
      const [name, type] = input[i + j]

      closet = { ...closet, [type]: closet?.[type] ? closet[type] + 1 : 1 }
    }

    const combinations = Object.values(closet).reduce((acc, cur) => (acc *= cur + 1), 1)

    answer.push(combinations - 1)

    i += clothes + 1
  }

  console.log(answer.join("\n"))

  process.exit()
})

// 조합 (nCr)
function getCombinations(arr, selectNum) {
  const result = []

  if (selectNum === 1) return arr.map((el) => [el])

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1)
    const combinations = getCombinations(rest, selectNum - 1)
    const attached = combinations.map((el) => [fixed, ...el])

    result.push(...attached)
  })

  return result
}
