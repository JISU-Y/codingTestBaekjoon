var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString();

function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

if (leapYear(input)) {
  console.log("1");
} else {
  console.log("0");
}
