// https://laycoder.tistory.com/209
function solution(numbers) {
  let answer = ""

  answer = numbers
    .map((el) => el.toString()) // 요소들을 모두 string으로 바꿔준다
    .sort((a, b) => b + a - (a + b)) // 앞 뒤 바꿔서 더한 것을 비교한다 3 30 / 30 3
    .join("")

  console.log(answer)

  return answer[0] === "0" ? "0" : answer
}

// solution([6, 10, 2])
solution([3, 30, 34, 5, 9])
// solution([0, 0, 0])

// 내가 푼 것
// function solution(numbers) {
//     let answer = ""
//     let tempNums = [...numbers]

//     tempNums = tempNums.map((el) =>
//       el
//         .toString()
//         .split("")
//         .map((innerEl) => parseInt(innerEl))
//     )

//     const maxLength = Math.max(...numbers)
//       .toString()
//       .split("").length

//     // 일단 큰 수대로 나열
//     for (let i = 0; i < maxLength; i++) {
//       tempNums = tempNums.sort((a, b) => (b[i] ? b[i] : b[i - 1]) - (a[i] ? a[i] : a[i - 1]))
//       console.log(tempNums)
//     }

//     //   console.log(tempNums)

//     answer = tempNums.map((el) => el.join("").toString()).join("")

//     console.log(answer)

//     return answer
//   }
