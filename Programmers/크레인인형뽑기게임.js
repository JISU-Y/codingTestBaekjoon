function solution(board, moves) {
  let answer = 0
  const copiedBoard = [...board]
  const container = []

  // move 하나마다 0이 아닌 수 가져오기 (가져온 거 0으로 변경)
  moves.forEach((move) => {
    for (let i = 0; i < copiedBoard.length; i++) {
      if (copiedBoard[i][move - 1] !== 0) {
        if (copiedBoard[i][move - 1] === container[container.length - 1]) {
          // 터뜨리기
          container.pop()
          answer += 2
        } else {
          // 그 수 container에 넣기
          container.push(copiedBoard[i][move - 1])
        }
        // console.log(copiedBoard[i][move - 1])
        // 0으로 바꾸기
        copiedBoard[i][move - 1] = 0
        break
      }
    }
  })
  console.log(container)
  console.log(copiedBoard)
  console.log(answer)
  // 새로운 배열에 가져온 수 넣기
  // 새로운 배열에 넣을 때 직전에 같은 숫자 이면 그 숫자 둘다 빼기
  // 터뜨린 인형 세기

  return answer
}

const [board, moves] = [
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4],
]

solution(board, moves)
