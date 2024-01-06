/* 기타 레슨 */
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
  const [N, M] = input.shift()
  const lectureList = input[0].map((e) => +e)

  console.log("N", N)
  console.log("M", M)
  console.log("lectureList", lectureList)

  console.log(binarySearch(lectureList, M))

  process.exit()
})

const binarySearch = (targetArr, targetValue) => {
  let low = Math.max(...targetArr)
  let high = targetArr.reduce((a, b) => a + b, 0)
  let realResult = 0

  while (low <= high) {
    let middle = Math.floor((low + high) / 2)
    let count = 0
    let sum = 0

    // !!!!!! 미리 array를 만들지 말고 그냥 for문 돌면서 계산해주기
    for (let i = 0; i < targetArr.length; i++) {
      if (sum + targetArr[i] > middle) {
        count++
        sum = targetArr[i]
      } else {
        sum += targetArr[i]
      }
    }

    if (sum > 0) count++

    if (count > targetValue) {
      low = middle + 1
    } else if (count <= targetValue) {
      high = middle - 1
      realResult = middle
    }
  }

  return realResult
}
