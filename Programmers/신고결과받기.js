function solution(id_list, report, k) {
  // id를 키로 갖는 Object 만듦
  // 여기서 email 받은 것 카운팅
  const userList = Object.fromEntries(id_list.map((el) => [el, 0]))
  // 여기서 자신을 신고한 사람을 배열로 넣음
  const reportList = Object.fromEntries(id_list.map((el) => [el, []]))
  console.log(userList)
  console.log(reportList)

  // 사람마다 신고받은 횟수 카운팅
  report.forEach((el) => {
    const reporter = el.split(" ")[0]
    const reportee = el.split(" ")[1]
    // 신고 받은 사람을 key, value로 신고한 사람을 배열로 넣어준다.
    // 그사람이 여러번 신고했어도 한번만 적용된다.
    reportList[reportee] = reportList[reportee].includes(reporter) //
      ? reportList[reportee]
      : [...reportList[reportee], reporter]
  })

  Object.values(reportList).forEach((el) => {
    // 신고한 사람 배열의 길이가 k번 이상이 되면
    if (el.length >= k) {
      // 각 신고한 사람을 키로 가져가서 1을 증가 시켜준다.
      el.map((reporter) => userList[reporter]++)
    }
  })

  console.log(reportList)
  console.log(userList)
  console.log(Object.values(userList))

  return Object.values(userList)
}

solution(
  ["muzi", "frodo", "apeach", "neo"], //
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
) // [2,1,1,0] // 각 유저가 메일을 받은 횟수

// solution(
//   ["con", "ryan"], //
//   ["ryan con", "ryan con", "ryan con", "ryan con"],
//   3
// ) // [2,1,1,0] // 각 유저가 메일을 받은 횟수
