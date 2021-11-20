var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var input = fs.readFileSync("input.txt").toString().split(" ");

let firstNum = parseInt([...input[0]].reverse().join(""));
let secondNum = parseInt([...input[1]].reverse().join(""));

console.log(firstNum > secondNum ? firstNum : secondNum);
