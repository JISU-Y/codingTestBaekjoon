const fs = require("fs")
let input =
  process.platform === "linux" //
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("Baekjoon/input.txt").toString().split("\n")

const C = parseInt(input[0])

// Javascript 는 ES6 문법이 정답 오류날 경우가 많이 있다.
// 되도록이면 ES6+ 문법을 사용하지 않는 것으로 한다.
for (let i = 1; i <= C; i++) {
  const students = parseInt(input[i][0])
  let scores = input[i].split(" ").slice(1, students)
  console.log(scores)

  // let sum = 0
  // for (let j = 1; j <= students; j++) {
  //   sum += parseInt(scores[j])
  // }

  const sum = scores.reduce((acc, cur) => {
    acc += parseInt(cur)
    return acc
  })
  console.log(sum)

  const avg = sum / students

  // scores.filter((score) => score > avg).length

  let num = 0
  for (let j = 1; j <= students; j++) {
    if (avg < parseInt(scores[j])) {
      num++
    }
  }

  const avgPercent = (num / students) * 100
  console.log(`${avgPercent.toFixed(3)}%`)
}
