var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin");
var input = fs.readFileSync("input.txt");

console.log(input.toString().charCodeAt(0));
// 'a'.charCodeAt(0) => 문자에서 asc 코드로 변환
// String.fromCharCode(65) => asc에서 문자
