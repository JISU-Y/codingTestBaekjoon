function solution(s) {
  let compressedS = ""
  const sArr = []

  // n개 단위로 잘라서 압축해주는 함수

  // 1부터 길이의 반까지만 돌리면 됨 (반 이상되면 어차피 중복될 수 없음)
  for (let j = 1; j <= s.length / 2; j++) {
    // 문자 0번 요소부터 확인하고 특정하게 증가시킴
    for (let i = 0; i < s.length; ) {
      // 0 ~ j 요소까지 자름 (j가 2이면 'ab')
      const checkValue = s.slice(i, i + j)
      // checkValue가 연속으로 몇개 있는지 확인
      const count = repeatCount(s, checkValue, i, j)
      // count가 1일 때는 1안적어줘도 됨
      // 반복된 수 + 검사한 단어를 압축 문자열에 넣음
      compressedS += `${count === 1 ? "" : count}${checkValue}`

      if (count > 1) i += checkValue.length * count
      // 반복된 수 * 검사한 단어 길이 그 다음부터 check
      else i = i + j // 반복된 것 없으면 그냥 원래 하던대로 n번씩 건너 뜀
    }
    console.log(compressedS)
    console.log(compressedS.length)
    sArr.push(compressedS.length)
    compressedS = ""
  }

  console.log(Math.min(...sArr))
  // 압축된 것 중에 가장 짧은 길이 return
  return s.length === 1 ? 1 : Math.min(...sArr)
}

// name은 full S, letter는 찾을 단어, position은 현재 위치, jump는 j(몇개 단위)
function repeatCount(name, letter, position, jump) {
  let repeat = 1

  // 현재 위치가 아닌 현재 위치의 다음 부터 검사(현재 위치 + n개 단위)
  // n개씩 뛰어넘어 가면서 계산
  for (let i = position + jump; i < name.length; i = i + jump) {
    // 검사하려고 하는 단어랑 checkValue랑 다르면 연속되지 않은 것이니까 break
    if (name.slice(i, i + jump) !== letter) break
    repeat++
  }

  return repeat
}

// solution("aabbaccc") // 7
// solution("ababcdcdababcdcd") // 9
solution("a") // 8
