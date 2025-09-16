// https://school.programmers.co.kr/learn/courses/30/lessons/60057
// 문제 설명
// 데이터 처리 전문가가 되고 싶은 "어피치"는 문자열을 압축하는 방법에 대해 공부를 하고 있습니다. 최근에 대량의 데이터 처리를 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데, 문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.
// 간단한 예로 "aabbaccc"의 경우 "2a2ba3c"(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)와 같이 표현할 수 있는데, 이러한 방식은 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있습니다. 예를 들면, "abcabcdede"와 같은 문자열은 전혀 압축되지 않습니다. "어피치"는 이러한 단점을 해결하기 위해 문자열을 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.

// 예를 들어, "ababcdcdababcdcd"의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 "2ab2cd2ab2cd"로 표현할 수 있습니다. 다른 방법으로 8개 단위로 잘라서 압축한다면 "2ababcdcd"로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.

// 다른 예로, "abcabcdede"와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 "abcabc2de"가 되지만, 3개 단위로 자른다면 "2abcdede"가 되어 3개 단위가 가장 짧은 압축 방법이 됩니다. 이때 3개 단위로 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.

// 압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// s의 길이는 1 이상 1,000 이하입니다.
// s는 알파벳 소문자로만 이루어져 있습니다.
// 입출력 예
// s	result
// "aabbaccc"	7
// "ababcdcdababcdcd"	9
// "abcabcdede"	8
// "abcabcabcabcdededededede"	14
// "xababcdcdababcdcd"	17

// 문자열을 다루는 문제
// 일단 1개 기준으로 잘랐을 때가 짧은지 2개 기준으로 잘랐을 때가 짧은지 .. n개 기준으로 잘랐을 때 짧은지를 봐야 함
// 그러면 1, 2, 3, ... n 개씩 잘라서 압축을 해보아야 한다. => 브루트포스
// 압축하는 방법은 1과 2비교 -> 같으면 2(문자)처리, 2와 3을 비교해서 같으면 또 처리  ...
// 그렇게 해서 압축된 문자열을 배열에 저장. (혹은 문자열의 길이를 배열에 저장)
// 가장 짧은 길이를 반환하면 될 것.

const s = "ababcdcdababcdcd";

function solution(str) {
  let lengthArray = [];
  let compressedStr = "";
  // unit은 어차피 str length까지 길어질 이유가 없음.
  for (unit = 1; unit <= Math.ceil(str.length / 2); unit++) {
    // [0, 1], [1, 2], [2, 3] ...
    for (i = 0; i < str.length; ) {
      const currentStr = str.slice(i, i + unit);
      const count = repeatCount(str, currentStr, i, unit); // currentStr이 얼마나 반복되는지 확인
      compressedStr += `${count === 1 ? "" : count}${currentStr}`;
      i += count * unit;
    }
    lengthArray.push(compressedStr.length);
    compressedStr = "";
  }

  return Math.min(...lengthArray);
}

function repeatCount(wholeString, letter, position, jump) {
  // jump가 즉 letter의 length가 됨.
  let repeat = 1;

  // 그냥 통짜 str과 현재 비교하려는 단어 자체를 처음부터 비교하겠다는 것.
  for (let i = position + jump; i < wholeString.length; i = i + jump) {
    if (wholeString.slice(i, i + jump) !== letter) break;
    repeat++;
  }

  return repeat;
}

// 접근법 자체는 맞은 것으로 보임. 하지만 구현을 못하는 것 같음.

// 문자열: "aabbaccc"
// unit = 2일 때

// position=0, letter="aa", jump=2
// ├─ i=0+2=2: "bb" ≠ "aa" → break
// └─ repeat = 1

// position=2, letter="bb", jump=2
// ├─ i=2+2=4: "ac" ≠ "bb" → break
// └─ repeat = 1

// position=4, letter="ac", jump=2
// ├─ i=4+2=6: "cc" ≠ "ac" → break
// └─ repeat = 1

console.log(solution(s));

function solutionMine(s) {
  let crashedS = "";
  const sArr = [];

  for (let j = 1; j <= s.length / 2; j++) {
    for (let i = 0; i < s.length; ) {
      const checkValue = s.slice(i, i + j);
      const count = repeatCount(s, checkValue, i, j);
      crashedS += `${count === 1 ? "" : count}${checkValue}`;
      if (count > 1) i += checkValue.length * count;
      else i = i + j;
    }
    sArr.push(crashedS.length);
    crashedS = "";
  }
  return s.length === 1 ? 1 : Math.min(...sArr);
}

function solutionOther(s) {
  if (s.length === 1) return 1;
  let min = 1000;
  for (let i = 1; i <= s.length / 2; i++) {
    let str1 = "";
    let str2 = "";
    let ans = "";
    let count = 1;
    for (let j = 0; j < s.length; j += i) {
      if (j === 0) {
        str1 = s.slice(j, j + i);
      } else {
        str2 = s.slice(j, j + i);
        if (str1 === str2) {
          count++;
          if (j + i === s.length) ans += `${count}${str1}`;
        } else {
          if (count > 1) {
            ans += `${count}${str1}`;
          } else {
            ans += str1;
          }
          count = 1;
          if (str1.length > str2.length) {
            ans += str2;
          }
          str1 = str2;
          if (j + i === s.length) ans += str2;
        }
      }
    }
    min = Math.min(ans.length, min);
  }

  return min;
}
