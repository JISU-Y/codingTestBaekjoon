/* 축구 */
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
  input.push(Number(line))
}).on("close", function () {
  const [A, B] = input.map((el) => el / 100)

  const section = 90 / 5

  const nonPrimeGoalList = [0, 1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18]
  // 1골을 첫번째 section에서 넣을 수도 두번째.. 등등 섹션 어디 넣는지에 따라 경우의 수도 있기 때문에 combination 붙여줘야 함.
  const AgoalPossibilityList = nonPrimeGoalList.map(
    (e) => combination(section, e) * Math.pow(A, e) * Math.pow(1 - A, section - e)
  )
  const BgoalPossibilityList = nonPrimeGoalList.map(
    (e) => combination(section, e) * Math.pow(B, e) * Math.pow(1 - B, section - e)
  )

  let totalPossibility = 0
  for (let i = 0; i < nonPrimeGoalList.length; i++) {
    for (let j = 0; j < nonPrimeGoalList.length; j++) {
      totalPossibility += AgoalPossibilityList[i] * BgoalPossibilityList[j]
    }
  }
  console.log(1 - totalPossibility)

  process.exit()
})

function combination(n, r) {
  let result = 1
  for (let i = 0; i < r; i++) {
    result *= (n - i) / (i + 1)
  }
  return result
}

// 둘 다 소수가 아닌 골 가능 경우의 수 / 모든 골 가능 경우의 수
// 13*13 / 19*19
// const nonPrimeGoal = Math.pow(nonPrimeGoalList.length, 2)
// const allGoal = Math.pow(section + 1, 2)
// const possibility = nonPrimeGoal / allGoal

// console.log("🚀 ~ possibility:", 1 - possibility)
