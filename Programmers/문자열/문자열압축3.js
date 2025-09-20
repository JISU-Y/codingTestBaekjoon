// "aabbaccc"	7
// "ababcdcdababcdcd"	9
// "abcabcdede"	8
// "abcabcabcabcdededededede"	14
// "xababcdcdababcdcd"	17

const s = "a";

// aabbaccc
// 1 unit
// a, a, b, b, a, c, c, c
// 2 unit
// aa, bb, ac, cc
// 3 unit
// aab, bac, cc
// 4 unit
// aabb, accc
// 5 unit 쓸데 없음

function solution(str) {
  let compressedLengthArr = [];

  let unit = 1;
  for (unit; unit <= str.length / 2; unit++) {
    // unit 기준으로 map 돌면서 반복되는 수 찾기 + 카운팅
    let myArr = [];
    for (i = 0; i < str.length; ) {
      const currentCursor = str.slice(i, i + unit);
      myArr.push(currentCursor);
      i = i + unit;
    }

    let current = myArr[0];
    let result = "";
    let count = 1;

    for (j = 1; j < myArr.length; j++) {
      if (myArr[j] === current) {
        count++;
      } else {
        result += `${count > 1 ? count : ""}${current}`;
        current = myArr[j];
        count = 1;
      }

      if (j === myArr.length - 1) {
        result += `${count > 1 ? count : ""}${current}`;

        compressedLengthArr.push(result.length);
      }
    }
  }

  // length가 1인 엣지케이스일 떄 Infinity 나와서 수정
  return compressedLengthArr.length ? Math.min(...compressedLengthArr) : 1;
}

console.log(solution(s));
