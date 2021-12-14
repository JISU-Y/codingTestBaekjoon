const fs = require("fs")
let input =
  process.platform === "linux" //
    ? fs.readFileSync("/dev/stdin").toString().trim().split(" ")
    : fs.readFileSync("Baekjoon/input.txt").toString().trim().split(" ")

// 단어가 1글자 이상일 때만 count
// 이렇게 안하면 띄어쓰기 하나만 입력했을 때
// input = [ '' ] 찍혀서 length 1로 나옴
console.log(input[0] === "" ? 0 : input.length)
