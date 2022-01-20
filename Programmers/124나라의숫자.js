// 답지 https://haerang94.tistory.com/228
function solution(n) {
  let answer = ""

  const arr = ["4", "1", "2"]

  while (n > 0) {
    answer = arr[n % 3] + answer
    n = Math.floor((n - 1) / 3)
  }

  return answer
}

// solution(1)
// solution(2)
// solution(3)
// solution(4)
console.log(solution(15))

// 1 // 1
// 2 // 2
// 3 // 4

// 4 // 11
// 5 // 12
// 6 // 14

// 7 // 21
// 8 // 22
// 9 // 24

// 10 // 41
// 11 // 42
// 12 // 44

// 13 // 111
// 14 // 112
// 15 // 114

// 16 // 121
// 17 // 122
// 18 // 124

// 19 // 141
// 20 // 142
// 21 // 144

// 3의 배수는 무조건 4로 끝남
// 3으로 나눈 나머지가 0이면 4, 1이면 '1', 2면 '2'를 붙임
// 3으로 나눈 몫을 또 똑같이 계산한다. 그래서 그 몫이 3보다 작아질 때까지 구한다.

// let convertedNum = ""
// function convertTo124(num) {
//   console.log(num)

//   if (num % 3 === 0) {
//     convertedNum += "4"
//   } else if (num % 3 === 1) {
//     convertedNum += "1"
//   } else if (num % 3 === 2) {
//     convertedNum += "2"
//   }

//   if (num <= 3) {
//     return convertedNum
//   }
//   // console.log(convertedNum)
//   if (num / 3 <= 3 || num % 3 === 0) {
//     return convertTo124(Math.floor(num / 3) - 1)
//   } else {
//     return convertTo124(Math.floor(num / 3))
//   }
// }

// function solution(n) {
//   convertTo124(n)

//   return Array.from(convertedNum).reverse().join("")
// }
