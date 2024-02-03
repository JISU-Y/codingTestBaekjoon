/* 블로그 */
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
  const [, X] = input.shift()

  console.log(findGuestNumBetween(input[0], X).join("\n"))

  process.exit()
})

// Sliding windows
function findGuestNumBetween(arr, num) {
  // 현재 윈도우 [0, num]
  let maxGuestNum = arr.slice(0, num).reduce((acc, cur) => (acc += cur), 0)
  console.log("🚀 ~ findGuestNumBetween ~ maxGuestNum:", maxGuestNum)
  let maxCount = 1
  let changingMax = maxGuestNum

  for (let i = num; i < arr.length; i++) {
    changingMax = changingMax - arr[i - num] + arr[num] // 윈도우 이동 [1, 1 + num]
    console.log("🚀 ~ findGuestNumBetween ~ changingMax:", changingMax)
    // 0번째 인덱스 요소의 값을 다시 뺴주고, 새로운 num번쨰 인덱스 값을 더해줌.

    if (maxGuestNum === changingMax) maxCount++
    else if (maxGuestNum < changingMax) {
      maxGuestNum = changingMax
      maxCount = 1
    }
  }

  return [maxGuestNum || "SAD", maxGuestNum ? maxCount : ""]
}
