function solution(arr, divisor) {
  let answer = []

  answer = arr.filter((el) => el % divisor === 0).sort((a, b) => a - b)

  return answer.length ? answer : [-1]
}

// const arr = [5, 9, 7, 10]
// const divisor = 5
// const arr = [2, 36, 1, 3]
// const divisor = 1
const arr = [3, 2, 6]
const divisor = 10

solution(arr, divisor)
