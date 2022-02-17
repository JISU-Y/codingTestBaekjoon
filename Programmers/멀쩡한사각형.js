function solution(w, h) {
  const total = w * h

  const cut = w + h - gcd(w, h)

  return total - cut
}

function gcd(a, b) {
  if (b === 0) return a
  return gcd(b, a % b)
}

solution(8, 12) // 80

// 최대공약수
// b와 a%b를 나눈다
// b가 0이 될 때까지 나누어서 그 때의 a가 최대공약수가 된다.
const gcd = (a, b) => {
  if (b === 0) return a
  return gcd(b, a % b)
}

// 최소공배수
// a,b를 곱해서 a,b의 최대공약수로 나누면 최소공배수가 된다.
const lcm = (a, b) => (a * b) / gcd(a, b)
