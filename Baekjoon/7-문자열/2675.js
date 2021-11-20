var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var input = fs.readFileSync("input.txt").toString().split("\n");

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  let R = parseInt(input[i].split(" ")[0]); // R
  let word = input[i].split(" ")[1];

  let newWord = "";
  for (let j = 0; j < word.length; j++) {
    for (let k = 0; k < R; k++) {
      newWord += word[j];
    }
  }

  console.log(newWord);
}
