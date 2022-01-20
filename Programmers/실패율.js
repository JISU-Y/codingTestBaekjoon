function solution(N, stages) {
  let failRate = {}

  // 각 요소가 사람마다 멈춰있는 스테이지를 말함
  // 1단계는 8중 1명이니까 1/8 실패율
  // 2단계는 7명 중 3명이 성공못했으니 3/7 ...
  // 이렇게 실패율 계산해서
  // sorting

  // stage를 변수로 반복문을 돌림
  // 모든 참가자들이 똑같은 단계를 깼을 수도 있기 때문에 forEach는 안되었다.
  for (let stage = 1; stage <= N; stage++) {
    // 각 stage의 참가인원 (stage보다 큰 숫자를 가지고 있는 사람이 그 단계를 최소한 도전 중이거나 깼다)
    const stageParticipants = stages.filter((el) => el >= stage)
    // 각 stage마다 도전하고 있는 인원 (도전 하고 있으면 그 stage 넘버를 가지고 있다.)
    const challenging = stages.filter((el) => el === stage)
    // stage와 실패율을 키와 값으로 객체로 전달한다.
    failRate = { ...failRate, [stage]: challenging.length / stageParticipants.length }
  }

  console.log(failRate)
  console.log(Object.entries(failRate).sort(([, a], [, b]) => b - a))

  // 객체를 value(실패율) 순으로 sorting
  // 객체라서 entries를 사용해서 sorting
  const sorted = Object.entries(failRate).sort(([, a], [, b]) => b - a)

  // sorting 후에는
  //   [
  //     [ '3', 0.5 ],
  //     [ '4', 0.5 ],
  //     [ '2', 0.42857142857142855 ],
  //     [ '1', 0.125 ],
  //     [ '5', 0 ]
  //   ]
  // 이렇게 되므로 map으로 가공해줌
  const stageArr = sorted.map((el) => parseInt(el[0]))

  // 알고보니 객체로 넣을 필요 없고, 바로 배열 ['1', 0.55] 로 넣었음 되었다.

  console.log(stageArr)

  // sorting
  return stageArr
}

const [N, stages] = [5, [2, 1, 2, 6, 2, 4, 3, 3]]
// const [N, stages] = [4, [4, 4, 4, 4, 4]]

solution(N, stages)

// function solution(N, stages) {
//     let result = [];
//     for(let i=1; i<=N; i++){
//         let reach = stages.filter((x) => x >= i).length;
//         let curr = stages.filter((x) => x === i).length;
//         result.push([i, curr/reach]);
//     }
//     result.sort((a,b) => b[1] - a[1]);
//     return result.map((x) => x[0]);
// }
