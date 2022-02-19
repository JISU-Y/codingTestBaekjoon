function solution(progresses, speeds) {
  let answer = []
  let work_period = []

  // 각 작업 기간의 배열을 생성  // 더해주는 작업시간을 while로 안해줘도 됨
  // work_period = progresses map 올림((100 - 93)/speed[0])
  work_period = progresses.map((el, index) => Math.ceil((100 - el) / speeds[index]))

  // [7, 3, 9]

  // 7을 일단 max로 두고

  // 다음 걸로 넘어가서 7보다 3이 작으니까 3은 이미 완성되어 있어야 하는 작업

  let max = 0
  let num = 1
  work_period.forEach((el, index) => {
    // max 설정
    if (max < el) {
      max = el
    }

    // 배열의 마지막, 다음 요소가 max보다 클 경우
    if (max < work_period[index + 1] || index === work_period.length - 1) {
      answer.push(num)
      num = 1
    } else {
      // max보다 작으면
      num++
    }
  })
  console.log(answer)

  // while [93, 30, 55]

  // 93 + 1 + 1 + 1

  // [96, 100, 55]

  // [100, 100, 55]

  // if(array[0] === 100)

  // while() 뒤에 100이 또 있나 없나 확인

  // 100인 애들은 shift, count ++

  return answer
}

solution([93, 30, 55], [1, 30, 5])

function solution(progresses, speeds) {
  var answer = []
  let beforeCommitDay = 0
  progresses.map((a, i) => {
    let day = Math.ceil((100 - a) / speeds[i]) // 반복문 안에서 7 3 9
    if (day > beforeCommitDay) {
      answer.push(1)
      beforeCommitDay = day
    } else {
      answer[answer.length - 1]++ // 마지막 요소 1
    }
  })
  return answer
}
