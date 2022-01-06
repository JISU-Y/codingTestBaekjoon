function solution(sizes) {
  const width = Math.max(...sizes.map((size) => Math.min(...size)))
  const height = Math.max(...sizes.map((size) => Math.max(...size)))
  console.log(width, height)
  return Number(width) * Number(height)
}

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]

solution(sizes)
