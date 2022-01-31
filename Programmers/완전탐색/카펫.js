function solution(brown, yellow) {
  let answer = []

  const wide = brown + yellow

  for (let i = Math.floor(wide); i >= 3; i--) {
    if (wide % i === 0) {
      answer.push([i, wide / i])
    }
  }

  return answer.filter((el) => (el[0] - 2) * (el[1] - 2) === yellow && el[0] >= el[1]).flat(1)
}

// solution(10, 2)
solution(8, 1)
// solution(24, 24)
