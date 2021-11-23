// 링크드 리스트
// const n1 = {
//   data: 100,
// }

// const n2 = {
//   data: 200,
// }

// n1.next = n2

// console.log(n1)

class Node {
  constructor(data, next = null) {
    // data 하고 pointer
    this.data = data
    this.next = next
  }
}

const n1 = new Node(100)

console.log(n1) // { data: 100, next: null }

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  // Method
  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head)
    // 기존의 head를 next로 지정
    // 그리고 그 새로운 노드가 head가 되도록
    this.size++ // node 개수 증가시키기
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data)
    let current

    //If empty, make head
    if (!this.head) this.head = node
    else {
      current = this.head // 처음부터 시작

      while (current.next) {
        current = current.next
        // 다음 노드 다음 노드 쭉쭉 가다가
        // 아예 끝나면 안되니까 그 직전으로 할려고 current.next일때 while문 중단
      }

      current.next = node // 마지막에 집어넣음
    }
    this.size++ // node 개수 증가시키기
  }

  // Insert at index
  insertAt(data, index) {
    // 잘못된 index return
    if (index < 0 && index > this.size) return

    // If first index
    // do exatly the same as insertFirst
    if (index === 0) {
      this.insertFirst(data)
      return
    }

    // add a node to insert
    const node = new Node(data)

    let current, previous

    // Set current to first
    current = this.head
    let count = 0

    // find where node should be
    while (count < index) {
      previous = current // Node before index
      count++
      current = current.next // Node after index
    }

    node.next = current // link Node before index
    previous.next = node // link Node after index

    this.size++ // node 개수 증가시키기
  }

  // Get at index
  getAt(index) {
    let current = this.head
    let count = 0

    while (current) {
      if (count == index) return current.data
      count++
      current = current.next
    }

    return null
  }

  // Remove at index
  removeAt(index) {
    if (index < 0 && index > this.size) return

    let current = this.head
    let previous
    let count = 0

    // remove first
    if (index === 0) this.head = current.next
    // set next node to first
    else {
      while (count < index) {
        count++
        previous = current
        current = current.next
      }
      previous.next = current.next
    }

    this.size--
  }

  // Clear list
  clearList() {
    this.head = null // head를 없애면 참조할 곳 없어서 그냥 없어짐
    this.size = 0
  }

  // Print list data
  printListData() {
    let current = this.head

    while (current) {
      console.log(current.data)
      current = current.next
      // current를 다음으로 계속 넘기면서
      // current가 마지막 즉, null이 될 때까지 console.log 찍는다
    }
  }
}

const ll = new LinkedList()

ll.insertFirst(100)
ll.insertFirst(200)
// { data: 200, next: Node { data: 100, next: null } }
ll.insertFirst(300)

ll.insertLast(400)

ll.insertAt(500, 2)

ll.removeAt(2)
ll.removeAt(0)

ll.printListData()
