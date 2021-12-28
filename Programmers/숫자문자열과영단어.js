function solution(s) {
  const numString = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  let answer = s

  numString.forEach((el, idx) => {
    answer = answer.split(el).join(idx)
  })
  console.log(answer)
  return Number(answer)
}

const s = "one4seveneight"
solution(s)
