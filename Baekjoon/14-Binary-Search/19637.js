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
  const [N] = input.shift()
  const budgetList = input.shift().map((e) => +e)
  const [budgetMaxLimit] = input.shift()

  console.log("N", N)
  console.log("budgetList", budgetList)
  console.log("budgetMaxLimit", budgetMaxLimit)

  const MIN = 1
  const MAX = Math.max(...budgetList)

  // console.log("min?", MIN)
  // console.log("max?", MAX)

  let sortedList = []
  for (let i = MIN; i <= MAX; i++) {
    sortedList.push(i)
  }

  console.log(binarySearch(sortedList, budgetList, budgetMaxLimit))

  process.exit()
})

const binarySearch = (arr, targetArr, targetValue) => {
  let low = 0
  let high = arr.length - 1
  let realResult = 0

  while (low <= high) {
    let middle = Math.floor((low + high) / 2)
    const current = arr[middle]

    const curArr = targetArr.map((el) => (el >= current ? current : el))
    let curResult = curArr.reduce((a, b) => a + b, 0)

    console.log("curArr", curArr)
    console.log("curResult", curResult)
    // 120 110 140 150
    // 70
    // 50 40 70 70 => 230
    // 100
    // 100 100 100 100 => 400 (85 남음)
    // 127
    // 120 110 127 127 => 484 (1남음)
    // 128
    // 120 110 128 128 => 486 (1 모자름)

    // 나눠 준 것보다 돈이 많이 남는지 아닌지 판단
    if (targetValue < curResult) {
      high = middle - 1
    } else if (targetValue >= curResult) {
      low = middle + 1
      realResult = low // !!!!!! 조건을 만족하는 값 저장하기!
    }
  }

  return realResult
}
