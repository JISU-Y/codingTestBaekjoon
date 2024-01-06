/* IF문 좀 대신 써줘 */
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
  const [numOfLabel, numOfChar] = input.shift()
  const labelList = input.slice(0, 3).map((e) => [e[0], Number(e[1])])
  const charList = input.slice(3).map((e) => +e)

  for (let i = 0; i < numOfChar; i++) {
    let title = ""

    for (let j = 0; j < numOfLabel; j++) {
      if (charList[i] <= labelList[j][1]) {
        title = labelList[j][0]
        break
      }
    }

    console.log(title)
  }

  process.exit()
})
