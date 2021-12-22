function solution(new_id) {
  let answer = ""

  answer = new_id
    .toLowerCase() // 모두 소문자로
    .replace(/[^a-z0-9-_.]/gi, "") // 문자, 숫자, -, _, .이 아니면 없앰
    .replace(/(\.{2,})/gi, ".") // 2개 이상 반복되는 .을 하나로 합침
    .replace(/^\.|\.$/gi, "") // 앞뒤에 .있으면 지움

  if (answer === "") {
    answer = "a" // 빈 문자열인 경우 a 넣기
  }
  if (answer.length > 15) {
    // 문자열 길이 16 이상일 때 15까지만 자르기
    answer = answer.slice(0, 15).replace(/^\.|\.$/gi, "")
    // 자르고 나서 앞뒤에 .있으면 지움
  }
  if (answer.length < 3) {
    // 문자열 길이 3보다 작을 때 길이 3까지 마지막 문자 넣기
    answer = answer.padEnd(3, answer[answer.length - 1])
  }

  console.log(answer)
  return answer
}

// const new_id = "...!@BaT#*..y.abcdefghijklm"
// const new_id = "z-+.^."
// const new_id = "=.="
// const new_id = "123_.def"
// const new_id = "abcdefghijklmn.p"

solution(new_id)
