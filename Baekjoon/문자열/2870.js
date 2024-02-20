/* 수학숙제 */
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
  const N = input.shift()

  const regex = /\d+/g // 숫자 인 문자를 넣기. 숫자 아닌 것을 찾아서 replace 하니까 안됨.
  let resultList = []

  for (const str of input) {
    if (str.match(regex)) {
      resultList.push(...str.match(regex))
    }
  }

  const sortedResult = resultList.map((el) => BigInt(el)).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))

  console.log(sortedResult.join("\n"))

  process.exit()
})
