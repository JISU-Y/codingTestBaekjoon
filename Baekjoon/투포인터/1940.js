/* 주몽 */
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
  const [N] = input.shift()
  const [M] = input.shift()
  const materialNumbers = input[0].sort((a, b) => a - b)
  console.log("🚀 ~ N:", N)
  console.log("🚀 ~ M:", M)
  console.log("🚀 ~ materialNumbers:", materialNumbers)

  console.log(findPairOfSumNumber(materialNumbers, M))

  process.exit()
})

function findPairOfSumNumber(arr, num) {
  let left = 0 // 배열의 처음부터 시작
  let right = arr.length - 1 // 배열의 마지막 인덱스부터 시작

  let pairs = []

  while (left < right) {
    let sum = arr[left] + arr[right]

    if (sum === num) {
      pairs.push([arr[left], arr[right]])

      right--
    } else if (sum > num) {
      right--
    } else {
      left++
    }
  }

  return pairs.length
}
