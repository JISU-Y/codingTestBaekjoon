const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split(" ")
    : fs.readFileSync("input.txt").toString().split(" ");

const A = BigInt(input[0]);
const B = BigInt(input[1]);
let answer = A + B;
console.log(answer.toString());
// BigInt는 임의의 정밀도로 정수를 나타낼 수있는 JavaScript의 새로운 숫자 데이터형이라고 한다.
// BigInt를 출력할 때에는 toString()으로 출력해야 한다. 그렇지 않다면 끝에 n이 붙어서 나오기 때문

// 내가 작성한 코드 틀림//
// let aReversed;
// let bReversed;

// if (parseInt(A) >= parseInt(B)) {
//   aReversed = [...A].reverse();
//   bReversed = [...B].reverse();
// } else {
//   aReversed = [...B].reverse();
//   bReversed = [...A].reverse();
// }
// for (let i = bReversed.length; i < aReversed.length; i++) {
//   bReversed.push("0");
// }

// let Tenth = [0],
//   Oneth = [];

// for (let i = 0; i < aReversed.length; i++) {
//   let plus = parseInt(aReversed[i]) + parseInt(bReversed[i]);
//   console.log(plus);
//   if (plus >= 10) {
//     Tenth.push(1);
//     Oneth.push(plus % 10);
//   } else {
//     Tenth.push(0);
//     Oneth.push(plus);
//   }
// }
// // Oneth.push(0);
// console.log(Tenth, Oneth);

// let plusAB = [];
// for (let i = 0; i < Tenth.length; i++) {
//   plusAB.push(Tenth[i] + Oneth[i]);
// }
// console.log(parseInt(plusAB.join("")));
// console.log(parseInt(plusAB.reverse().join("")));
