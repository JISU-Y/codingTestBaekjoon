// https://school.programmers.co.kr/learn/courses/30/lessons/42577
// 문제 설명
// 전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
// 전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.

// 구조대 : 119
// 박준영 : 97 674 223
// 지영석 : 11 9552 4421
// 전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// phone_book의 길이는 1 이상 1,000,000 이하입니다. -> 빨라야 함?
// 각 전화번호의 길이는 1 이상 20 이하입니다.
// 같은 전화번호가 중복해서 들어있지 않습니다.

// ["119", "97674223", "1195524421"]	false
// ["123","456","789"]	true
// ["12","123","1235","567","88"]	false

const phone_book = ["123", "456", "789"];

// 119가 1195524421 앞에 붙어있는 형태가 되니까 얘는 false를 반환해야 한다.
// 근데 요소를 다 돌면서 앞에 붙어있는지를 찾아보는건 너무 오래걸릴 것 같다. 길이가 1000000개나 된다.
// 119가 다른 요소에 속하는지 다 확인해야 되고, 그 다음 2번째 요소도 또 다 확인해야 하고 ....

// 이거 저번처럼 못품.
// 내 머리로는 그냥 브루트 포스로 돌아버리는 거 밖에 생각이 안남..
// 이게 왜 해시인지도 모르겠음.
// 그래서 보니
// 전화번호: ["119", "97674223", "1195524421"]
// 1. Set 생성: {"119", "97674223", "1195524421"}
// 2. "119" 검사:
//    - 접두어: "1", "11" → Set에 없음 ✓
// 3. "97674223" 검사:
//    - 접두어: "9", "97", "976", ... → Set에 없음 ✓
// 4. "1195524421" 검사:
//    - 접두어: "1", "11", "119" → "119"가 Set에 있음! ✗
// 결과: false

// map을 돌긴 도는데, 그 한 요소의 접두어를 하나씩 검사해보는 것임.
// 왜냐면 전화번호 숫자 자체는 20이하라서 얼마 안걸림!!
// 그래서 Set으로 O(1)로 참조할 수 있게 만든 다음 하나씩 검사하는것

// 그래서 시간복잡도를 보면
// O(n*m) 임
// O(n*n)과 유사한 것 같지만, 현재 제약 사항을 보면
// 하나는 1,000,000이지만 또 하나는 20까지 밖에 안간다.
// 따라서 (On*20) 정도 이고 상수는 취급하지 않으므로 이 제약 조건 내에서는 O(n) 정도로 봐도 무방하다.

function solution(phoneBook) {
  const set = new Set(phoneBook);
  for (i = 0; i < phoneBook.length; i++) {
    for (j = 0; j < phoneBook[i].length; j++) {
      const prefix = phoneBook[i].slice(0, j);
      if (set.has(prefix)) {
        return false;
      }
    }
  }
  return true;
}

console.log(solution(phone_book));

//

function solutionOther(phoneBook) {
  return !phoneBook.sort().some((t, i) => {
    // 먼저 sorting한 다음에
    if (i === phoneBook.length - 1) return false; // 끝까지 봤는데도 return 안되면 false(속하는 관계 없음)

    return phoneBook[i + 1].startsWith(phoneBook[i]); // 현재의 요소와 그 다음 요소가 속하는 관계인지 확인하기
  });
}
function solutionOther2(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].indexOf(phone_book[i]) === 0) return false;
  }
  return true;
}
