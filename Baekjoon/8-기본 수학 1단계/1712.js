var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split(' ');
var input = fs.readFileSync("input.txt").toString().split(" ");

// 1000 70 170
const static = parseInt(input[0]); // 1000 3
const dynamic = parseInt(input[1]); // 70 2
const sale = parseInt(input[2]); // 170 1

const margin = sale - dynamic;
const count = Math.floor(static / margin) + 1;

console.log(margin <= 0 ? -1 : count);

// let a = 0; // 판매 대수
// let total = static + a; // 1000 + 70
// let saleTotal = 0;

// while (total > saleTotal) {
//   let tGap = static + dynamic * a - total;
//   let sGap = a * sale - saleTotal;
//   total = static + dynamic * a; // 3 5
//   saleTotal = a++ * sale; // 0 1

//   if (tGap > sGap) {
//     a = -1;
//     break;
//   }
// }

// console.log(a);
