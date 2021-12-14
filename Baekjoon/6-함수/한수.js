const fs = require("fs")
let input =
  process.platform === "linux" //
    ? fs.readFileSync("/dev/stdin")
    : fs.readFileSync("Baekjoon/input.txt")

// 123 => 1 2 3 +1 +1
// 100 x
// 101 -1 1 x
// 111 o
function isHan(num) {
  if (num < 100) return true
  else {
    // 어차피 3자리수 까지만
    // 첫번째 수 - 두번쨰 수 = 두번째 수 - 세번째 수
    // 가 되면 한수인 것이므로 true
    // 이항해서 풀음
    if (Number(num.toString()[0]) + Number(num.toString()[2]) === Number(num.toString()[1]) * 2) return true
    else return false
  }
}

let count = 0
for (let i = 1; i <= input; i++) {
  if (isHan(i)) {
    count++
  }
}

console.log(count)
