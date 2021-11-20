var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin");
var input = fs.readFileSync("input.txt");
input = parseInt(input);

// 1 (1) => 1
// 2 3 4 5 6 7 (6) => 2
// 8 9 10 11 12 13 14 15 16 17 18 19 (12) => 3
// 20 21 22 ~ 37 (18) => 4

// 6n
// 13 / 6 = 2
// n = 2

//   6  6
//  6 12 18 ... 6n
// 1 7 19 37 ...

// 등비수열이 아닌
// 그냥 range를 1씩 증가시키면서 개수를 세면 된다

let range = 1,
  block = 1;

while (block < input) {
  block += 6 * range; // 7 19 37 ...
  range++;
}

console.log(range);
