var fs = require("fs")
var input = fs.readFileSync("/dev/stdin").toString().split("\n")
// var input = fs.readFileSync("input.txt").toString().split("\n");
let N = parseInt(input[0])

for (let i = 1; i <= N; i++) {
  let row = input[i].split(" ")
  let num = parseInt(row[0])
  let sum = 0

  for (let j = 1; j <= num; j++) {
    sum += parseInt(row[j])
  }

  let count = 0
  for (let j = 1; j <= num; j++) {
    if (parseInt(row[j]) > sum / num) count++
  }

  console.log(`${((count / num) * 100).toFixed(3)}%`)
}
