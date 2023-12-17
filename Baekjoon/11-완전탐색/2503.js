/* 숫자 야구 */
const fs = require("fs")
// let input = process.platform === "linux" ? fs.readFileSync("/dev/stdin") : fs.readFileSync("./input.txt")
let input = `
4
123 1 1
356 1 0
327 2 0
489 0 1
`

const N = parseInt(input.toString().trim().split("\n")[0])
const tryList = input.toString().trim().split("\n").slice(1)
const tests = tryList.map((line) => ({
  num: line.split(" ")[0],
  strike: Number(line.split(" ")[1]),
  ball: Number(line.split(" ")[2]),
}))

function isUnique(num) {
  // 중복된 숫자가 없어야 함.
  const digits = Array.from(String(num), Number)
  // Set으로 중복줄이고 그 사이즈가 3자리 수 그대로 있어야 함.
  // 그리고 0이 있으면 안됨.
  return digits.length === new Set(digits).size && !digits.includes(0)
}

function check(num, test) {
  let strike = 0
  let ball = 0

  for (let i = 0; i < 3; i++) {
    // 숫자와 위치 모두 맞으면 strike!
    if (num[i] === test.num[i]) {
      strike++
    } else if (test.num.includes(num[i])) {
      // 숫자가 어딘가에 포함이 되어 있으면 ball!
      ball++
    }
  }

  return strike === test.strike && ball === test.ball
}

let count = 0

// 중요!! 브루트 포스이기 때문에 그냥 111 부터 모든 수를 다 돈다고 보면 될 것 같음
// 물론 숫자야구에서는 중복되는 숫자 없음
// 다 돌면서
for (let i = 123; i <= 987; i++) {
  if (isUnique(i)) {
    if (tests.every((test) => check(String(i), test))) {
      count++
    }
  }
}

console.log(count)
