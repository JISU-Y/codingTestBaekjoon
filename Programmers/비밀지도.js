function solution(n, arr1, arr2) {
  ;[arr1, arr2] = [arr1, arr2].map((el) =>
    el.map((innerEl) => {
      let binary = innerEl.toString(2)
      if (binary.length < n) {
        let zeroAttach = ""
        for (let i = 0; i < n - binary.length; i++) {
          zeroAttach += "0"
        }
        binary = zeroAttach + binary
      }
      return binary
    })
  )

  arr1 = arr1.map((el, idx) => {
    let mapStr = ""
    for (let i = 0; i < el.length; i++) {
      if (Number(el[i]) || Number(arr2[idx][i])) {
        mapStr += "#"
      } else {
        mapStr += " "
      }
    }
    el = mapStr
    return el
  })
  return arr1
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
