var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split(' ');
var input = fs.readFileSync("input.txt").toString().split(" ");
let A = parseInt(input[0]); // 5
let B = parseInt(input[1]); // 1
let V = parseInt(input[2]); // 6

console.log(Math.ceil((V - B) / (A - B)));
// 한번 V를 초과하면 B만큼 미끄러질 일은 없으므로
// 하루에 갈 수 있는 거리 (A-B)를 V-B로 나누면 된다
// d * (A-B) 이렇게 곱하는 도중 V보다 커질 경우 B를 안뺴줘도 되는 것이니까(이미 도착한 것이므로)
// V에서 B를 빼주고 나눠야한다
// a - b a - b a -b a > V => 근데 이미 a-b를 곱하고 있던 거니까 한번은 -b를 포함해서 곱해준 거임 쓸데없이 그래서 그걸 다시 더해줘야함

// 시간 초과
// let result = 0;
// let i = 1;
// while (true) {
//   result += A;
//   if (result >= V) break;
//   result -= B;
//   i++;
// }

// console.log(i);
