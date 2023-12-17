/* 진우의 달 여행 (Small) */
const fs = require("fs")
// let input = process.platform === "linux" ? fs.readFileSync("/dev/stdin") : fs.readFileSync("./input.txt")
let input = `
6 4
5 8 5 1
3 5 8 4
9 77 65 5
2 1 5 2
5 98 1 5
4 95 67 58
`

const N = parseInt(input.toString().trim().split("\n")[0].split(" ")[0])
const M = parseInt(input.toString().trim().split("\n")[0].split(" ")[1])
const paths = input.toString().trim().split("\n").slice(1).join("\n")

// 첫번째 출발
// 0, 1, 2, 3
// 0 고르고
// 0, 1 고름
// 0 -> 0 골랐으면 다음에는 0으로 못감
// 그 다음에는 1 골라야 함.
// 그 다음에는 0, 1 만 갈 수 있음.
const board = paths.split("\n").map((path) => path.split(" ").map((el) => parseInt(el)))

let fuel = Infinity

let visited = []

function dfs(step, position, prevMovement = 0) {
  visited.push(board[step][position])

  if (step === N - 1) {
    const newFuel = visited.reduce((acc, cur) => acc + cur, 0)
    fuel = Math.min(fuel, newFuel)

    visited.pop()

    return
  }

  for (let i = -1; i < 2; i++) {
    const nextPosition = position + i

    if (
      (step + 1 <= N && nextPosition >= 0 && nextPosition < M && prevMovement !== i) ||
      (prevMovement === i && step === 0)
    ) {
      dfs(step + 1, nextPosition, i)
    }
  }

  visited.pop()
}

function getMinFuelPath() {
  for (let start = 0; start < M; start++) {
    visited = []
    dfs(0, start)
  }

  return fuel
}

console.log(getMinFuelPath())
