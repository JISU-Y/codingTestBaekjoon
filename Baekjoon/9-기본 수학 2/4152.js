const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("input.txt").toString().split("\n");

let i = 0;
while (true) {
  const x = parseInt(input[i].split(" ")[0]);
  const y = parseInt(input[i].split(" ")[1]);
  const z = parseInt(input[i].split(" ")[2]);

  if (x === 0 && y === 0 && z === 0) break;
  if (x === 0 || y === 0 || z === 0) {
    console.log("wrong");
  } else {
    if (
      z * z === y * y + x * x ||
      y * y === z * z + x * x ||
      x * x === y * y + z * z
    ) {
      console.log("right");
    } else {
      console.log("wrong");
    }
  }

  i++;
}
