/* 영단어 암기는 괴로워 */
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
  const [N, M] = input[0].map((el) => +el)
  const wordList = input

  let wordCountObj = {}

  for (let i = 1; i <= N; i++) {
    const word = wordList[i][0]
    if (word.length < M) continue

    wordCountObj[word] = wordCountObj[word] ? wordCountObj[word] + 1 : 1

    // 와 이거때문에...........
    // wordCountObj = {
    //   ...wordCountObj,
    //   [word]: wordCountObj[word] ? wordCountObj[word] + 1 : 1,
    // }
  }

  const answer = Object.entries(wordCountObj)
    .sort(([aWord, aCount], [bWord, bCount]) => {
      const countDif = bCount - aCount
      const lengthDif = bWord.length - aWord.length

      if (countDif === 0) {
        if (lengthDif === 0) {
          if (aWord > bWord) return 1
          if (aWord < bWord) return -1
          return 0
        }

        return lengthDif
      }

      return countDif
    })
    .map(([word, _]) => word)
    .join("\n")

  console.log(answer)

  process.exit()
})

// const alphabetList = countList.sort((a, b) => a - b)
// const lenghtList = alphabetList.sort((a, b) => b.length - a.length)
// const resultList = lenghtList.sort((a, b) => b[1] - a[1])

// console.log(resultList.join("\n"))
