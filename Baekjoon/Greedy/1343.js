/* 폴리오미노 */
const fs = require("fs")
// let input = process.platform === "linux" ? fs.readFileSync("/dev/stdin") : fs.readFileSync("./input.txt")
// input = "XX.XXXXXXXXXX..XXXXXXXX...XXXXXX"
// input = "XXXX....XXX.....XX"
input = "X"

function coverWithPoliomino(board) {
  // 4의 공배수 먼저 확인
  // 그 다음 2의 공배수

  if (board.replace(".", "").length % 2 !== 0) return -1

  const filteredBoard = board.split(".")

  const convertedBoard = filteredBoard.map((miniBoard) => {
    if (miniBoard.length >= 4) {
      let quantity = Math.floor(miniBoard.length / 4)

      let boardWithA = miniBoard
      for (let i = 0; i < quantity; i++) {
        boardWithA = boardWithA.replace("XXXX", "AAAA")
      }

      if (boardWithA.length >= 2) {
        let quantity = Math.floor(miniBoard.length / 2)

        for (let i = 0; i < quantity; i++) {
          boardWithA = boardWithA.replace("XX", "BB")
        }
      }

      return boardWithA
    }
    if (miniBoard.length >= 2) {
      let quantity = Math.floor(miniBoard.length / 2)

      let boardWithB = miniBoard
      for (let i = 0; i < quantity; i++) {
        boardWithB = miniBoard.replace("XX", "BB")
      }
      return boardWithB
    }
  })

  return convertedBoard.join(".")
}

console.log(coverWithPoliomino(input))

// 뭔가 푼 것 같았는데, 그냥 차례대로 replace 해주기만 하면 되었다니..
// 어떻게 생각이 이렇게 이어지는지 너무 궁금하다..
// https://junghyeonsu.tistory.com/260
function coverWithPoliominoAnswer(board) {
  board = board.replace(/XXXX/g, "AAAA")
  board = board.replace(/XX/g, "BB")

  return board.includes("X") ? -1 : board
}

console.log(coverWithPoliominoAnswer(input))
