var fs = require("fs");
var input = fs.readFileSync("/dev/stdin");
// var input = require("fs").readFileSync("input.txt");

input = parseInt(input);

let stars = ""; // 나는 밖으로 빼서 선언을 했는데, 이게 더 빠른 것 같다.

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    if (j < input - (i + 1)) stars += " ";
    else stars += "*";
    // => stars += (j < input - (i + 1)) ? '*' : ' '
    // 이렇게도 가능
  }
  stars += "\n";
}

console.log(stars);
