function solution(left, right) {
  let answer = 0
  for (let i = left; i <= right; i++) {
    answer += i
    for (let j = 1; j <= i; j++) {
      if (Math.sqrt(i) === j) {
        answer -= 2 * i
      }
    }
  }
  return answer
}

const left = 13
const right = 17

console.log(solution(left, right)) // 43
