const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("input.txt").toString().split("\n");

const coordsX = [];
const coordsY = [];
for (let i = 0; i < 3; i++) {
  let x = parseInt(input[i].split(" ")[0]);
  let y = parseInt(input[i].split(" ")[1]);
  coordsX.push(x);
  coordsY.push(y);
}

const xc = coordsX.sort()[1];
const yc = coordsY.sort()[1];
console.log(
  `${coordsX.sort().find((x) => x !== xc)} ${coordsY
    .sort()
    .find((y) => y !== yc)}`
);
