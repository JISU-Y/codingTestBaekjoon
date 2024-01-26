/* 교수가 된 현우 */
/* ! 테스트 */
const path = "./input.txt"
const fs = require("fs")

const readline = require("readline")
const rl = readline.createInterface({
  input: fs.createReadStream(path),
  output: process.stdout,
})

// /* ! 제출용 */
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

let input = []

rl.on("line", function (line) {
  input.push(Number(line))
}).on("close", function () {
  const T = input.shift()

  input.forEach((num) => {
    let count = 0

    // 5의 배수, 25의 배수, 125의 배수 ... 를 찾는다.
    // 15라고 하면 15나 16이나 17이나 5로 나누었을 때 5가 3개 뿐
    // 25부터는 25/5 하면 5개이긴 한데 25/25 = 1 즉, 25는 5가 2개이니까 하나 더 세어야 함.
    for (let i = 5; i <= num; i = i * 5) {
      count += Math.floor(num / i)
    }

    console.log(count)
  })

  process.exit()
})

// 25 = 5 * 5 // 25 / 5 = 5 / 5 = 1

// 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
// 5 5 5 => 1000

// 10 9 8 7 6 5 4 3 2 1
// 2 5 2 2 2 2 5 2 2 2 => 100

// 5 4 3 2 1
// 5 2 2 2 => 10

// 0 1 2 3 4 0
// 5 6 7 8 9 1
// 10 11 12 13 14 2
// 15 16 17 18 19 3
// 20 21 22 23 24 4
// 25 26 27 28 29 6
// 30 31 32 33 34 7
// 35 36 37 38 39 8
// 40 41 42 43 44 9
// 45 46 47 48 49 10
// 50 51 52 53 54 12
// 55 56 57 58 59 13
// 60 61 62 63 64 14
// 65 66 67 68 69 15
// 70 71 72 73 74 16
// 75 76 77 78 79 18

// 0 1 2 3 4
// 6 7 8 9 10
// 12 13 14 15 16
// 18 19 20 21 22
// 24 25 26 27 28
// 30

// 100/5 20 -> 6 * (n-1) -> 24
// 24 = 20/5 => 4 () 6
// 25 = 21/5 => 4 () 6 + 1

// 100 / 25 => 4
// 105 / 25 => 5
// 110 / 25 => 6
// 115 / 25 => 7

// 1024 /
