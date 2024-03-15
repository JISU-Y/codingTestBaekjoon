const input = ["119", "97674223", "1195524421", "100", "1193", "200"]

function solution(phone_book) {
  const sortedPhoneBook = phone_book.sort((a, b) => a.localeCompare(b))
  // localeCompare()는 문자열을 비교할 때 유용한 메서드로, 호출하는 문자열이 인자로 받은 문자열보다 사전 순으로 앞에 오면 음수, 뒤에 오면 양수, 같으면 0을 반환합니다. 이를 통해 문자열로 변환된 숫자들을 사전 순으로 정렬

  for (let i = 0; i < sortedPhoneBook.length - 1; i++) {
    if (sortedPhoneBook[i + 1].startsWith(sortedPhoneBook[i])) {
      return false
    }
  }

  return true
}

console.log(solution(input))

function solution_timeout(phone_book) {
  for (let i = 0; i < phone_book.length; i++) {
    const arr = phone_book.filter((el) => el.includes(phone_book[i]))

    for (let j = 1; j < arr.length; j++) {
      const longNum = phone_book[i].length >= arr[j].length ? phone_book[i] : arr[j]
      const shortNum = phone_book[i].length < arr[j].length ? phone_book[i] : arr[j]

      if (longNum.slice(0, shortNum.length) === shortNum) {
        return false
      }
    }
  }

  return true
}

console.log(solution_timeout(input))
