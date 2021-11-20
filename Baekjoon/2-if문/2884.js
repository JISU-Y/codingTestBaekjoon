var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
// var input = require("fs").readFileSync("input.txt").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

var HH = a;
var MM = b - 45;

if (MM < 0) {
  MM += 60;
  HH -= 1;
  console.log(HH < 0 ? 24 + HH : HH, MM);
} else {
  console.log(HH, MM);
}
