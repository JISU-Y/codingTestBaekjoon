function solution(s) {
  return s
    .split(" ")
    .map((el) =>
      el
        .split("") //
        .map((letter, index) => (index > 0 ? letter.toLowerCase() : letter.toUpperCase()))
        .join("")
    )
    .join(" ")
}

solution("3people unFollowed me")
// solution("for the last week")
