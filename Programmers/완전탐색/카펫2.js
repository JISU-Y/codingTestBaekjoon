const [brown, yellow] = [24, 24]

function solution(brown, yellow) {
  const total = brown + yellow
  let answer

  for (let i = 3; i <= Math.floor(total / i); i++) {
    const width = Math.floor(total / i)
    const satisfiedTotal = width * i === total
    const satisfiedBrownCount = width * 2 + (i - 2) * 2 === brown

    if (satisfiedTotal && satisfiedBrownCount) {
      answer = [width, i]
    }
  }

  return answer
}

console.log(solution(brown, yellow))
