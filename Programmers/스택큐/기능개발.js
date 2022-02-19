function solution(progresses, speeds) {
  let answer = []

  // progresses를 한 칸씩 앞으로 뺄 것이기 때문에(100이 된 작업은 없애버리면 되니까)
  // [0]이 없을 때 까지 반복문 실행
  while (progresses[0]) {
    // 작업 계산 : index에 맞춰서 speed를 더해준다. 대신 100 넘으면 그냥 100으로 침
    progresses = progresses.map((progress, index) => (progress + speeds[index] >= 100 ? 100 : progress + speeds[index]))

    let count = 0 // 배포 수

    // 맨 앞의 작업이 100이 된 순간 다시 한번 반복문
    // 맨 앞에 있는 것 말고도 뒤에 있는 것들도 작업이 끝났는지도 봐야하니까
    while (progresses[0] >= 100) {
      if (progresses[0] >= 100) {
        progresses.shift()
        speeds.shift()
        count++
      } else {
        count = 0
      }
    }

    // 배포한 것이 있을 때만 배포 수 넣음
    if (count) {
      answer.push(count)
    }
  }

  return answer
}

// solution([93, 30, 55], [1, 30, 5])

solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// 다른 사람 풀이
// function solution(progresses, speeds) {
//   let answer = []
//   let prog_queue = [...progresses]
//   let copiedSpeeds = [...speeds]

//   // 앞에 있는 기능이 나오기 전까지 뒤에 있는 기능이 완성되어 있더라도 못 나오니 큐이지 않을까

//   // 모든 작업이 다 배포될 때까지 반복
//   while (prog_queue[0]) {
//     // speed고려해서 작업량 올리기
//     prog_queue = prog_queue.map((el, index) => (el + copiedSpeeds[index] >= 100 ? 100 : el + copiedSpeeds[index]))

//     let count = 0
//     // 맨 앞에 있는 것이 100이상이 되면
//     while (prog_queue[0] >= 100) {
//       // progress랑 speeds 모두 앞에 뺌
//       prog_queue.shift()
//       copiedSpeeds.shift()
//       count++
//     }
//     // 100이 넘어서 배포할 것이 있으면 answer 배열에 넣음
//     if (count > 0) {
//       answer = [...answer, count]
//     }
//   }
//   console.log(answer)

//   return answer
// }

// 내가 처음에 풀다가 만 것
// function solution(progresses, speeds) {
//   let answer = []
//   let prog_queue = [...progresses]
//   let copiedSpeeds = [...speeds]

//   // 앞에 있는 기능이 나오기 전까지 뒤에 있는 기능이 완성되어 있더라도 못 나오니 큐이지 않을까

//   while (prog_queue[0] <= 100) {
//     // speed 더해가기
//     prog_queue = prog_queue.map((el, index) => (el + copiedSpeeds[index] >= 100 ? 100 : el + copiedSpeeds[index]))

//     if (prog_queue[0] >= 100) {
//       prog_queue.forEach(el => {
//         el.queue
//       })
//       prog_queue.shift()
//       copiedSpeeds.shift()
//       if (prog_queue.length !== 0) {
//         answer.push(prog_queue.length)
//       }
//     }
//     console.log(prog_queue)
//   }

//   console.log(answer)
//   console.log(prog_queue)

//   return answer
// }
