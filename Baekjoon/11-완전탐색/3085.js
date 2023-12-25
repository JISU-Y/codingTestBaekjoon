/* 사탕 게임 ::: 다시 풀기 .. */
const fs = require("fs")
// let input = process.platform === "linux" ? fs.readFileSync("/dev/stdin") : fs.readFileSync("./input.txt")
let input = `
3
CCP
CCP
PPC
`

const N = parseInt(input.toString().trim().split("\n")[0])
const board = input.toString().trim().split("\n").slice(1).join("\n")
const candyBoard = board
  .split("\n")
  .map((path) => path)
  .map((el) => el.split(""))

// 봄보니
// N x N
// 두칸 고르고 그 두개를 바꿈
// 행 혹은 열로 연속된 사탕 먹음 (캔디 크러시 사가처럼)
// 제일 최대로 먹을 수 있는 개수 출력
// (0,0) <-> (0,1)
// (0,1) <-> (0,2) 연속된 수 바꿈
// (0,1) <-> (1,0) 연속된 수 바꿈 ...
// 이런식으로 모든 경우의 수를 보고 연속된 최대의 사탕을 고름
function getMaxEdibleCandies(N) {
  let maxCount = 0

  let possibleBoardList = []

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1; j++) {
      // console.log(`(${i}, ${j}) <-> (${i}, ${j + 1})`)
      let tempCandyBoard = [...candyBoard]

      const prevValue = tempCandyBoard[i][j]
      tempCandyBoard[i][j] = tempCandyBoard[i][j + 1]
      tempCandyBoard[i][j + 1] = prevValue

      possibleBoardList.push(tempCandyBoard)
    }
  }

  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N - 1; i++) {
      // console.log(`(${i}, ${j}) <-> (${i + 1}, ${j})`)
      let tempCandyBoard = [...candyBoard]

      const prevValue = tempCandyBoard[i][j]
      tempCandyBoard[i][j] = tempCandyBoard[i + 1][j]
      tempCandyBoard[i + 1][j] = prevValue

      // console.log(tempCandyBoard)
      possibleBoardList.push(tempCandyBoard)
    }
  }

  console.log(possibleBoardList)

  possibleBoardList.forEach((possibleBoard) => {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        // 최대 사탕 개수 구하기
      }
    }
  })

  return maxCount
}

console.log(getMaxEdibleCandies(N))
