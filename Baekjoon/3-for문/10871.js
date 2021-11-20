var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var input = require("fs").readFileSync("input.txt").toString().split("\n");
var N = parseInt(input[0].split(" ")[0]);
var X = parseInt(input[0].split(" ")[1]);
var A = input[1].split(" ");

let answer = "";

for (let i = 0; i < N; i++) {
  if (parseInt(A[i]) < X) {
    answer += `${A[i]} `;
  }
}

console.log(answer);

// 이렇게 하면 더 빠름!!
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// input을 enter 기준으로 input[0] => N과 X / input[1] => A로 나눔

let num = input[0].split(" ").map((x) => Number(x)); // N과X가 들어있는 input[0] 배열을 map loop 돌리면서 int 배열로 변경
let arr = input[1].split(" ").map((x) => Number(x)); // numbers도 마찬가지
const answer = [];

for (let i = 0; i <= num[0]; i++) {
  if (num[1] > arr[i]) {
    answer.push(arr[i]); // 배열에 일단 하나씩 넣고
  }
}

console.log(answer.join(" ")); // join으로 구분점 구분해서 뽑아낸다
