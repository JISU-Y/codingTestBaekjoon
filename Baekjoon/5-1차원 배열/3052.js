var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var input = fs.readFileSync("input.txt").toString().split("\n");
let left = [];
let i;

for (i = 0; i < 10; i++) {
  if (!left.includes(parseInt(input[i]) % 42)) {
    left.push(parseInt(input[i]) % 42);
  }
}

console.log(left.length);

// var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let left = [];

// for (let i = 0; i < 10; i++) {
//   left.push(
//     left.includes(parseInt(input[i]) % 42) ? null : parseInt(input[i]) % 42
//   );
// }

// console.log(left.indexOf(null) >= 0 ? left.indexOf(null) : left.length);
