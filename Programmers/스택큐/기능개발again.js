const progresses = [95, 90, 99, 99, 80, 99] // [93, 30, 55] //
const speeds = [1, 1, 1, 1, 1, 1] // [1, 30, 5] //

// 배포는 하루에 한 번
// 뒤의 기능이 더 빨리 개발될 수 있긴 한데 배포는 앞에 끝나고 가능

function solution(progresses, speeds) {
  let workingDayArr = []
  let deployArr = []

  progresses.map((progress, i) => {
    workingDayArr.push(Math.ceil((100 - progress) / speeds[i]))
  })

  let count = 0 // 기능 개수
  let maxDay = workingDayArr[0] // 최대값을 일단 가장 첫 요소로
  workingDayArr.forEach((day) => {
    // 현재 day가 최대값보다 크면 그 때의 count 푸시
    if (maxDay < day) {
      deployArr.push(count)
      maxDay = day // 최대값 변경
      count = 1 // count 초가화
    } else {
      count++
    }
  })
  deployArr.push(count) // 마지막 count

  // [ 5, 10, 1, 1, 20, 1 ] 이거 가지고 어떻게 요리할 수 없나 삽질
  //   for (let i = 0; i < workingDayArr.length; i++) {
  //     let count = 1
  //     for (let j = i + 1; j <= workingDayArr.length; j++) {
  //       if (j === workingDayArr.length) {
  //         deployArr.push(count)
  //       }
  //       if (workingDayArr[i] > workingDayArr[j]) {
  //         count++
  //       } else {
  //         deployArr.push(count)
  //         i = j
  //       }
  //     }
  //   }

  return deployArr
}

console.log(solution(progresses, speeds))
