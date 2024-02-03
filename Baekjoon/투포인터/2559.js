/* 수열 */
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
  input.push(line.split(" ").map((e) => +e))
}).on("close", function () {
  const [, K] = input.shift()
  const temperatureList = input[0]

  console.log(findMaxTemperatureBetween(temperatureList, K))

  process.exit()
})

// Sliding windows
function findMaxTemperatureBetween(arr, num) {
  // 현재 윈도우 [0, num]
  let maxNum = arr.slice(0, num).reduce((acc, cur) => (acc += cur), 0)
  let changingMax = maxNum

  for (let i = num; i < arr.length; i++) {
    changingMax = changingMax - arr[i - num] + arr[i] // 윈도우 이동 [1, 1 + num]
    // 0번째 인덱스 요소의 값을 다시 뺴주고, 새로운 i번쨰 인덱스 값을 더해줌.

    if (maxNum < changingMax) {
      maxNum = changingMax
    }
  }

  return maxNum
}
