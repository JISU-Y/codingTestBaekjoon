let fs = require("fs")
let input = fs.readFileSync("/dev/stdin")
// let input = require("fs").readFileSync("input.txt");

let input = 5

let stars = ""
for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    stars += j < input - (i + 1) ? " " : "*"
  }
  stars += "\n"
}

console.log(stars)
