// ICN -> JFK -> HND 이렇게 연결되어 있는 거고
// 그러면 ICN에 연결된 노드 리스트를 이용해서 연결 연결 끝까지 찾아가면 되나?
// 그렇게 되면 ICN에서 시작해서 끝까지 탐색하는 거니까 DFS가 되려나
// 일단 알아보기 쉽게 class 형태로 관리하면 좋을 듯

// 그냥 dfs돌면 끝나버릴 수 있음.

function solution(tickets) {
  const answer = [];

  function dfs(from, remainTickets, path) {
    const updatedPath = [...path, from]; // path 갱신
    if (remainTickets.length === 0) {
      answer.push(updatedPath);
    } else {
      remainTickets.map(([departure, arrival], index) => {
        if (departure !== from) return;

        const to = arrival;
        const nextRemainTickets = [...remainTickets];
        nextRemainTickets.splice(index, 1); // 쓴 티켓 버리기

        // 방금 쓴 티켓의 도착지가 출발지가 됨.
        dfs(to, nextRemainTickets, updatedPath); // 찍고 다니던 path도 계속 넘겨줌
      });
    }
  }

  dfs("ICN", tickets, []);
  return answer.sort()[0]; // 정렬
}

console.log(
  solution([
    ["ICN", "BBB"],
    ["ICN", "CCC"],
    ["CCC", "ICN"],
  ]),
); // AAA, CCC, AAA, BBB
console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ]),
); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]

console.log(
  solution([
    ["ICN", "D"],
    ["D", "ICN"],
    ["ICN", "B"],
  ]),
); // ['ICN', 'D', 'ICN', 'B']

// Graph {
//   adjacencyList: Map(3) {
//     'ICN' => [ 'ATL', 'SFO' ],
//     'SFO' => [ 'ATL' ],
//     'ATL' => [ 'ICN', 'SFO' ]
//   }
// }
// [ 'ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO' ]
