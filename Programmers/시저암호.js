function solution(s, n) {
  let answer = ""

  answer = s
    .split("")
    .map((el) => {
      if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) {
        return String.fromCharCode(el.charCodeAt() + n > 90 ? el.charCodeAt() + n - 26 : el.charCodeAt() + n)
      } else if (el.charCodeAt() >= 97 && el.charCodeAt() <= 122) {
        return String.fromCharCode(el.charCodeAt() + n > 122 ? el.charCodeAt() + n - 26 : el.charCodeAt() + n)
      } else {
        return el
      }
    })
    .join("")

  return answer
}

const s = "e F d"
const n = 4

solution(s, n)
