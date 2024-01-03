/* 유기농 배추 */
const fs = require("fs")
// let input = process.platform === "linux" ? fs.readFileSync("/dev/stdin") : fs.readFileSync("./input.txt")
let input = `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5
`
let [testCase, ...cases] = input.toString().trim().split("\n")

const T = Number(testCase)
let caseList = cases.map((el) => el.split(" ").map((e) => Number(e)))

let M, N, K
for (let i = 0; i < T; i++) {
  let worm = 1
  ;[M, N, K] = caseList[0]

  let ground = new Array(N).fill(0).map(() => new Array(M).fill(0))

  caseList.shift()

  for (let j = 0; j < K; j++) {
    let [X, Y] = caseList[j]

    ground[Y][X] = 1
  }

  ground.forEach((cabRow, rowIndex) => {
    cabRow.forEach((cab, colIndex) => {
      if (cab === 1) {
        dfs([colIndex, rowIndex], ground)
        // console.log("ground!!", ground)
        worm++
      }
    })
  })

  //   console.log(ground)
  //   console.log(worm)
  caseList = caseList.slice(K)
}

function dfs([x, y], visited) {
  let neighbors = [
    [0, 1], // 오른쪽
    [1, 0], // 아래쪽
    [0, -1], // 왼쪽
    [-1, 0], // 위쪽
  ]
    .map(([posX, posY]) => {
      const [movedX, movedY] = [x + posX, y + posY]
      if (movedX >= 0 && movedY >= 0 && movedX < M && movedY < N) {
        return [movedX, movedY]
      }
    })
    .filter((el) => el && visited[el[1]][el[0]] === 1 && visited[el[1]][el[0]] !== 2)

  visited[y][x] = 2
  let result = [[x, y]]

  console.log(neighbors)

  neighbors.forEach((neighbor) => {
    if (visited[y][x] !== 2) {
      result.push(...dfs(neighbor, visited))
    }
  })

  return result
}
