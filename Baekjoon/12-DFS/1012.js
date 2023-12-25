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
  ;[M, N, K] = caseList[0]

  caseList.shift()

  for (let j = 0; j < K; j++) {
    let [X, Y] = caseList[j]
    console.log([X, Y])
  }

  caseList = caseList.slice(K)
}
