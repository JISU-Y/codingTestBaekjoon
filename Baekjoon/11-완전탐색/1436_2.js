const fs = require("fs")
// let input = fs.readFileSync("/dev/stdin")
// input = input.toString().trim().split("\n")[0]
input = 1

let number = 665 // 이게 함수 안에 있으면 시간 초과 나거나 틀렸다고 나옴.... ㅡㅡ
function nameMovieWith666(N) {
  let count = N

  while (count > 0) {
    number++
    if (number.toString().includes("666")) {
      count--
    }
  }

  return number
}

console.log(nameMovieWith666(input))

// 1666, 2666, 3666, 9666
// 10666,
// 00000
// 00666
// 06660, 06666
// 66600, 66660
// 66666

// function nameMovieWith666(N) {
//     let count = 0

//     for (let number = 665; count <= N; number++) {
//       if (number.toString().includes("666")) {
//         count++
//         if (count === N) {
//           return number
//         }
//       }
//     }
//   }
