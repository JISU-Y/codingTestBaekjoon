function solution(dartResult) {
  let changed = dartResult.replace(/10/g, "t").split("")
  let score = 0
  let sum = []

  changed.forEach((el, idx) => {
    if (!isNaN(Number(el))) score = Number(changed[idx])
    if (el === "t") score = 10
    if (el === "S") sum.push(score)
    if (el === "D") sum.push(Math.pow(score, 2))
    if (el === "T") sum.push(Math.pow(score, 3))
    if (el === "*") {
      sum[sum.length - 2] = sum[sum.length - 2] * 2 // 전 점수도 두배
      sum[sum.length - 1] = sum[sum.length - 1] * 2 // 방금 점수 두배
    }
    if (el === "#") {
      sum[sum.length - 1] = sum[sum.length - 1] * -1
    }
  })
  return sum.reduce((acc, cur) => (acc += cur), 0)
}
