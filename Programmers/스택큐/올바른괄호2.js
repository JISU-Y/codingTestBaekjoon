// https://school.programmers.co.kr/learn/courses/30/lessons/12909

// 문제 설명
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

// "()()"	true
// "(())()"	true
// ")()("	false
// "(()("	false
const s = "(()(";
// ())(

// 괄호가 짝지어져야 하니까 하나씩 꺼내보면서 짝을 찾아주고
// 짝이 다 맞으면 true
// 하나가 남으면 false를 반환하면 될 것 같다.
// 이건 하나씩 꺼내는 것인데 앞으로 꺼내든 뒤로 꺼내든 들어온 순서와는 관계가 없어 보인다.
// 그냥 숫자만 셀수 없는게 )( 이렇게 반대로 되어 있는 경우도 숫자는 맞아도 올바르지 않은 괄호임.
// 하나씩 꺼내서 "(" 용 배열, ")"용 배열을 만들어서 그 개수를 비교하는 건 어떨까
// 그냥 단순히 하면 숫자 새는거랑 똑같음, 그래서 하나 짝 지어질 때마다 배열에 들어있던 것을 없애보자.

// (())()
// (    )
// (    )
// (    )
// -> OK

// (()(
// (
// (
// (    )
// -> X

function solution(str) {
  const parentheses = str.split("");
  let checker = [];

  for (i = 0; i < parentheses.length; i++) {
    const parenthesis = parentheses[i];
    if (parenthesis === ")" && checker.length === 0) {
      return false;
    }

    if (parenthesis === ")" && checker[checker.length - 1] === "(") {
      checker.pop();
    } else {
      checker.push(parenthesis);
    }
  }

  return checker.length === 0;
}

console.log(solution(s));
