/* 랜선 자르기 */
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
  const [K, N] = input.shift()
  const lanCableList = input.map((e) => +e)

  console.log("K", K)
  console.log("N", N)
  console.log("lanCableList", lanCableList)

  console.log(binarySearch(lanCableList, N))

  process.exit()
})

const binarySearch = (targetArr, targetValue) => {
  let low = 1
  let high = Math.max(...targetArr)
  let realResult = 0

  while (low <= high) {
    let middle = Math.floor((low + high) / 2)
    let count = 0

    // !!!!!! 미리 array를 만들지 말고 그냥 for문 돌면서 계산해주기
    for (let i = 0; i < targetArr.length; i++) {
      if (targetArr[i] >= middle) {
        console.log("middle", middle)
        console.log("Math.floor(targetArr[i] / middle)", Math.floor(targetArr[i] / middle))
        count += Math.floor(targetArr[i] / middle)
      }
    }

    if (count >= targetValue) {
      low = middle + 1
      realResult = middle
    } else if (count < targetValue) {
      high = middle - 1
    }
  }

  return realResult
}
