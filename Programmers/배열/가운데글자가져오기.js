// https://school.programmers.co.kr/learn/courses/30/lessons/12903
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// s	return
// "abcde"	"c"
// "qwer"	"we"
const s = "qwer";

// 일단 가운데 요소를 가져오려면 배열의 인덱스를 탐색해야 한다.
// 딱 가운데를 집으려면 요소의 개수에서 반을 나누면 된다.
// 문자열이 홀수인 경우는 한글자만 뽑아내면 되고, 이는 1 + 5 / 2 -> 3 번째 요소임을 뽑기 쉽다.
// 근데 문자열이 짝수인 경우는 두글자를 뽑아내야 한다. 4글자면 반은 2이고 옆에 있는 3번째 요소만 가져오면 될까?
// 6글자인 경우 abcdef 3이고 3,4 번째 요소를 뽑으면 될 것 같다.

function solution(str) {
  let answer = "";

  // 짝수
  if (str.length % 2 === 0) {
    const index = str.length / 2 - 1;
    answer = str.slice(index, index + 2);
  } else {
    const index = (1 + str.length) / 2 - 1;
    answer = str[index];
  }

  return answer;
}

console.log(solution(s));

function solutionOther1(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}
