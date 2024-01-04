/* 용돈 관리 */
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
  const [days, withdrawTimes] = input.shift()
  const spendList = input.map((e) => +e)

  console.log("days", days)
  console.log("withdrawTimes", withdrawTimes)
  console.log("spendList", spendList)

  console.log(binarySearch(spendList, withdrawTimes))

  process.exit()
})

const binarySearch = (targetArr, targetValue) => {
  let MIN = Math.max(...targetArr) // 최소 금액
  let MAX = targetArr.reduce((a, b) => a + b, 0)

  let low = MIN
  let high = MAX
  let realResult = 0

  while (low <= high) {
    let middle = Math.floor((low + high) / 2)
    let curMoney = 0
    let count = 0

    // !!!!!! 미리 array를 만들지 말고 그냥 for문 돌면서 계산해주기
    for (let i = 0; i < targetArr.length; i++) {
      if (curMoney >= targetArr[i]) {
        curMoney -= targetArr[i]
      } else {
        if (middle >= targetArr[i]) {
          curMoney = middle - targetArr[i]
          count++
        }
      }
    }

    if (count <= targetValue) {
      high = middle - 1
      realResult = middle // !!!!!! 조건을 만족하는 값 저장하기!
    } else if (count > targetValue) {
      low = middle + 1
    }
  }

  return realResult
}
