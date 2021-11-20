const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin")
    : fs.readFileSync("input.txt");
input = parseInt(input);

function fibonacci(num) {
  if (num === 0) return 0;
  else if (num === 1) return 1;
  else return fibonacci(num - 1) + fibonacci(num - 2); // 까꾸루 한다 / 10을 넣으면 9랑 8이랑 더함
}
// 외우자
// -1 값과 -2값을 더해준 것을 또 넣으면
// 결국에 계속 fibonacci가 호출되면서 fibonacci(0) fibonacci(1) 이 호출되어 0 + 1이 계산된다
// 그렇게 계산 하다보면 fibonacci(1) + fibonacci(1) 즉 2가 나오고
// 2 + 1 하면서 3 이 나오고 3이랑 옆에 2랑 더해서 5가 나오는 식으로 계산된다
console.log(fibonacci(input));

// 내가 푼 것 / 숫자가 구해지긴 하는데 런타임에러(stacksizeexeed) 남
// let num0 = 0,
//   num1 = 1,
//   num = 0;
// let count = 0;

// function fibonacci() {
//   num = num0 + num1;
//   num0 = num1;
//   num1 = num;
//   count++;
//   if (count !== input - 1) {
//     fibonacci();
//   }
// }

// fibonacci();

// console.log(num);
