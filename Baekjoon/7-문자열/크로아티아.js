const fs = require("fs")
let input =
  process.platform === "linux" //
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("Baekjoon/input.txt").toString()

console.log(
  input
    .replace(/c=/gi, "A")
    .replace(/c-/gi, "B")
    .replace(/dz=/gi, "C")
    .replace(/d-/gi, "D")
    .replace(/lj/gi, "E")
    .replace(/nj/gi, "F")
    .replace(/s=/gi, "G")
    .replace(/z=/gi, "H")
    .trim().length
) // trim 조심

// 다른 사람 풀이
const crAlpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

for (let alphabet of crAlpha) {
  input = input.split(alphabet).join("Q")
}
// for문을 croatia 알파벳 요소를 돌려서
// 해당 글자가 있으면 split하고 바로 Q(문자 하나)로 join 해줌
// 그러니 먼저 알파벳 기준으로 모두 쪼갠 다음에
// 그 사이를 Q로 채움으로써 글자를 제대로 셀 수 있게 된다

console.log(input.length)
