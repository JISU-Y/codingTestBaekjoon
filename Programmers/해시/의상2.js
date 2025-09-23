// https://school.programmers.co.kr/learn/courses/30/lessons/42578
// 문제 설명
// 코니는 매일 다른 옷을 조합하여 입는것을 좋아합니다.

// 예를 들어 코니가 가진 옷이 아래와 같고, 오늘 코니가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야합니다.

// 종류	이름
// 얼굴	동그란 안경, 검정 선글라스
// 상의	파란색 티셔츠
// 하의	청바지
// 겉옷	긴 코트
// 코니는 각 종류별로 최대 1가지 의상만 착용할 수 있습니다. 예를 들어 위 예시의 경우 동그란 안경과 검정 선글라스를 동시에 착용할 수는 없습니다.
// 착용한 의상의 일부가 겹치더라도, 다른 의상이 겹치지 않거나, 혹은 의상을 추가로 더 착용한 경우에는 서로 다른 방법으로 옷을 착용한 것으로 계산합니다.
// 코니는 하루에 최소 한 개의 의상은 입습니다.
// 코니가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

// [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]	5
// [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]	3

const c = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
  ["red_turban", "headgear"],
  ["white-earings", "earing"],
  ["black-shoes", "shoe"],
  ["gray-shoes", "shoe"],
  ["running_shoes", "shoe"],
]; // 5

// 1. yellow_hat
// 2. blue_sunglasses
// 3. green_turban
// 4. yellow_hat + blue_sunglasses
// 5. green_turban + blue_sunglasses

// 의상의 수는 최대 30개로 많지 않다.
// 왜 해시 문제인지는 모르겠음..
// 오히려 그냥 조합 문제 아닌가? 수학문제
// 순서 상관없는 조합 문제. 근데 인제 제약 사항으로 같은 종류는 같이 못 입는 걸로
// headgear -> yellow_hat, green_turban
// eyewear -> blue_sunglasses
// 각 종류 1개만 뽑는 경우 (=1개씩 센 총 개수)
// 종류 2개를 조합하는 경우 (각 개수를 곱함)
// ...

function solution(clothes) {
  const closet = new Map();

  clothes.forEach((item) => {
    const [clothing, type] = item;

    closet.set(type, [...(closet.get(type) || []), clothing]);
  });

  console.log("🚀 ~ solution ~ closet:", closet);
  // 그러면 이걸 1개 뽑는 경우, 2개 뽑는 경우, 3개 뽑는 경우 ... 쭉 개수를 곱해서 더해주면 되는거 아닌가?

  return;
}

console.log(solution(c));

// 각 종류별 선택 상황:

// 상의: [선택안함, A, B]           - 3가지
// 하의: [선택안함, C]              - 2가지
// 모자: [선택안함, D, E, F]        - 4가지

// 전체 조합: 3 × 2 × 4 = 24가지
// 아무것도 선택 안함: 1가지 제외
// 최종 답: 23가지

// 시간복잡도: O(n)

function solutionOther(clothes) {
  const closet = new Map();

  // 종류 별로 그룹핑 해서 개수만 저장
  clothes.forEach(([clothing, type]) => {
    closet.set(type, (closet.get(type) || 0) + 1);
  });

  let result = 1;
  for (const count of closet.values()) {
    result *= count + 1; // 선택 안하는 케이스 1개씩 추가
  }

  return result - 1; // 모든 종류를 다 선택 안하는 케이스 1개는 빼줘야 함.
}
