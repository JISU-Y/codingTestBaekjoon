/* 사탕 게임 */
const fs = require("fs")
// let input = process.platform === "linux" ? fs.readFileSync("/dev/stdin") : fs.readFileSync("./input.txt")
let input = `
5
YCPZY
CYZZP
CCPPP
YCYZC
CPPZZ
`
input = input.toString().trim().split("\n")

const N = parseInt(input[0])
const board = input.slice(1).map((line) => line.split("")) // 2차원 배열에 하나씩 나눠 담음

function countMax(board) {
  let max = 0

  for (let i = 0; i < N; i++) {
    let countRow = 1
    let countColumn = 1

    for (let j = 1; j < N; j++) {
      // row로 연속된 count 세기
      if (board[i][j] === board[i][j - 1]) {
        countRow++
      } else {
        max = Math.max(max, countRow)
        countRow = 1
      }

      // col로 연속된 count 세기
      if (board[j][i] === board[j - 1][i]) {
        countColumn++
      } else {
        max = Math.max(max, countColumn)
        countColumn = 1
      }
    }

    // 셋 중 가장 큰 것을 max로 지정
    max = Math.max(max, countRow, countColumn)
  }
  return max
}

let max = 0

for (let i = 0; i < N; i++) {
  // i와 인접한 것만 바꾸면 돼서 N 까지 다 돌 필요가 없음
  for (let j = 0; j < N - 1; j++) {
    // 양옆 swapping
    ;[board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]]
    // max 계산 (그때그때 max를 저장)
    max = Math.max(max, countMax(board))
    // 다시 원 상태로 돌림
    ;[board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]]

    // 위아래 swapping
    ;[board[j][i], board[j + 1][i]] = [board[j + 1][i], board[j][i]]
    // max 계산 (그때그때 max를 저장)
    max = Math.max(max, countMax(board))
    // 다시 원 상태로 돌림
    ;[board[j][i], board[j + 1][i]] = [board[j + 1][i], board[j][i]]
  }
}

console.log(max)

// 문제: 브루트 포스는 진짜 하나하나 다 봐야 한다는 것을 알아차리기 힘듦
// 어떤 걸 하나부터 열까지 다 봐야하는지도 찾기 어려웠던 것 같음
// 로직 자체도 구상하기가 힘듦.
// 배열의 요소를 swap 하는 것이라든지, max를 구하는 것들이라든지
// 잊고 있거나 아직 모르는데 간단한 로직? 공식이 있음
//
