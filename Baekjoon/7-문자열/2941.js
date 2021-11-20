var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim();
var input = fs.readFileSync("input.txt").toString().trim(); // trim을 넣어야 무조건 맞네... 왜지???
const crAlpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let alphabet of crAlpha) {
  input = input.split(alphabet).join("Q");
}
// for문을 croatia 알파벳 배열로 돌린다음에
// split은 넣은 글자로 string을 나누는 것이고
// join은 넣은 글자로 요소들을 다시 모아주는 것이다
// 그러니 먼저 알파벳 기준으로 쪼갠 다음에
// 그 사이를 Q로 채움으로써 글자를 제대로 셀 수 있게 된다

console.log(input.length);

// 백준 답안
// const fs = require("fs");
// const input = (
//   process.platform === "linux"
//     ? fs.readFileSync("/dev/stdin").toString()
//     : `ljes=njak`
// ).trim();

// let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

// function solution(input) {
//   for (let alphabet of croatia) {
//     input = input.split(alphabet).join("Q");
//   }

//   return input.length; // return input일 경우 QeQQak를 반환한다.
// }

// console.log(solution(input));

// 내가 푼 떨거지
// for (let i = 0; i < crAlpha.length; i++) {
//   if (input.includes(crAlpha[i])) {
//     console.log(crAlpha[i]);
//     twoLetter++;
//     if (i === 2) {
//       threeLetter++;
//       twoLetter--;
//     }
//   }
// }

// console.log(input.length - twoLetter - threeLetter);
