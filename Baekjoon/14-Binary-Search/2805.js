/* 나무 자르기 */
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
  const [, totalTreeLength] = input.shift()
  const treeList = input.shift().map((e) => +e)

  // console.log("N", numberOfTree)
  // console.log("totalTreeLength", totalTreeLength)
  // console.log("treeList", treeList)

  console.log(binarySearch(treeList, totalTreeLength))

  process.exit()
})

const binarySearch = (targetArr, targetValue) => {
  let MAX = Math.max(...targetArr)
  let low = 0
  let high = MAX
  let realResult = 0

  while (low <= high) {
    let middle = Math.floor((low + high) / 2)
    let curResult = 0

    // !!!!!! 미리 array를 만들지 말고 그냥 for문 돌면서 계산해주기
    for (let i = 0; i < targetArr.length; i++) {
      if (targetArr[i] >= middle) {
        curResult += targetArr[i] - middle
      }
    }

    if (targetValue <= curResult) {
      low = middle + 1
      realResult = middle // !!!!!! 조건을 만족하는 값 저장하기!
    } else if (targetValue > curResult) {
      high = middle - 1
    }
  }

  return realResult
}
