var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin");
var input = fs.readFileSync("input.txt");

let lowerInput = input.toString().toLowerCase();

// a~z까지 count를 담당하는 배열 선언 count기 때문에 모두 0으로 초기화
const result = new Array(26).fill(0);

// mississipi
for (let i = 0; i < input.length; i++) {
  // result 안에는 해당하는 알파벳의 순서가 들어가있어야 한다
  //   lowerInput.charCodeAt(i) - 97; // 0 ~  25
  result[lowerInput.charCodeAt(i) - 97]++;
}

// Math.max는 배열 중 가장 큰 요소를 반환 (index 아님)
const max = Math.max(...result); // result 배열 요소 중 가장 큰 수를 찾음
const index = result.indexOf(max); // 그 큰 수의 index를 찾음

let j = 0;
for (j = 0; j < 26; j++) {
  // 알파벳 count 하나씩 검사해서 max가 같은 index가 더 있을 경우 ? 출력하고 바로 break (다 돌았을 경우와 다르게 하기 위해)
  if (result[j] === max && index !== j) {
    console.log("?");
    break;
  }
}

// j가 26으로 for문을 다 돌았을 경우만 max가 하나라는 뜻, 그러고 나서 대문자로 바꿔서 출력
if (j === 26) console.log(String.fromCharCode(index + 65));

// for(let i=0;i<input.length;i++) {
//     if(lowerInput.includes(lowerInput[i]))
//     [...lowerInput].map((s,index)=>{
//         s = lowerInput[index]
//         if(lowerInput.includes(s))
//     })

// }

//
// [...lowerInput].map((s,index)=>{
//     s = lowerInput[index]
//     lowerInput.includes(s)
// })

// lowerInput.includes((s,index)=>{
//     lowerInput[index]
//     return s
// })
