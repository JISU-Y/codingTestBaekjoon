function solution(n) {
  const fibo = [0, 1]

  for (let i = 0; i < n - 1; i++) {
    fibo.push((fibo[i] + fibo[i + 1]) % 1234567)
    // 미리 1234567로 나누어 주어야 한다
    // 아니면 수가 너무 커져 infinity가 나옴
  }

  return fibo[n]
}

// solution(3) // 2
solution(10000) // 5
