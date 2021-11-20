var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin");
var input = fs.readFileSync("input.txt");

let result = "";
for (let i = 0; i < 26; i++) {
  result += input.indexOf(String.fromCharCode("a".charCodeAt(0) + i)) + " ";
  //   console.log(input.indexOf(String.fromCharCode("a".charCodeAt(0) + i)));
}

console.log(result);
