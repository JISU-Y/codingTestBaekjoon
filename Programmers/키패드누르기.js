function solution(numbers, hand) {
  let answer = ""
  let [left, right] = [
    [3, 0],
    [3, 2],
  ]
  //   console.log(left, right)

  numbers.forEach((number) => {
    if (number === 1 || number === 4 || number === 7) {
      const i = Math.floor(number / 3)
      const j = 0
      //   console.log(number)
      left = [i, j]
      answer += "L"
    } else if (number === 3 || number === 6 || number === 9) {
      const i = Math.floor(number / 3) - 1
      const j = 2
      //   console.log(number)
      right = [i, j]
      answer += "R"
    } else {
      // 2 5 8 0
      let i = 3
      const j = 1
      if (number !== 0) {
        i = Math.floor(number / 3)
      }
      //   console.log(number)
      const leftTonumber = Math.abs(left[0] - i) + Math.abs(left[1] - j)
      const rightTonumber = Math.abs(right[0] - i) + Math.abs(right[1] - j)
      //   console.log(leftTonumber, rightTonumber)
      //   console.log(left[0], left[1])
      //   console.log(right[0], right[1])
      if (leftTonumber > rightTonumber) {
        // left가 더 멀면
        right = [i, j]
        answer += "R"
      } else if (leftTonumber < rightTonumber) {
        // right가 더 멀면
        left = [i, j]
        answer += "L"
      } else {
        if (hand === "right") {
          right = [i, j]
          answer += "R"
        } else {
          left = [i, j]
          answer += "L"
        }
      }
    }

    // console.log(answer)
  })

  //   console.log(answer)
  return answer
}
const [numbers, hand] = [[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"]
// const [numbers, hand] = [[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"]
// const [numbers, hand] = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"]

solution(numbers, hand)

// 1   2   3
// 4   5   6
// 7   8   9
// *   0   #

// 00   01   02
// 10   11   12
// 20   21   22
// 30   31   32

// LRLLLRLLRRL
// LRLLLRLLRRL
