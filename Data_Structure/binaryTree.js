// 이진 탐색 트리 (Binary Search Tree/BST)

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value)
    this.count = 1
  }

  size() {
    return this.count
  }

  insert(value) {
    this.count++

    let newNode = new Node(value)

    // recursive search
    const searchTree = (node) => {
      // if value < node.value, go left
      if (value < node.value) {
        // if no left child, append new node
        if (!node.left) {
          node.left = newNode
        }
        // if left child, look left again
        else {
          searchTree(node.left)
        }
      }
      // if value > node.value, go right
      else if (value > node.value) {
        // if no right child, append new node
        if (!node.right) {
          node.right = newNode
        }
        // if left child, look right again
        else {
          searchTree(node.right)
        }
      }

      searchTree(this.root)
    }
  }

  min() {
    let currentNode = this.root

    // continue traversing left until no more children
    while (currentNode.left) {
      currentNode = currentNode.left
    }

    return currentNode.value
  }

  max() {
    let currentNode = this.root

    // continue traversing right until no more children
    while (currentNode.right) {
      currentNode = currentNode.right
    }

    return currentNode.value
  }

  contain(value) {
    let currentNode = this.root

    while (currentNode) {
      if (value === currentNode.value) {
        return true
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return false
  }

  // depth first search - branch by branch

  // in-order
  // left, root, right
  dfsInOrder() {
    let result = []

    const traverse = (node) => {
      // if left child exists, go left again
      if (node.left) traverse(node.left)

      // capture root node value
      result.push(node.value)

      // if right child exists, go right again
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return result
  }

  // pre-order
  // root, left, right
  dfsPreOrder() {
    let result = []

    const traverse = (node) => {
      // capture root node value
      result.push(node.value)

      // if left child exists, go left again
      if (node.left) traverse(node.left)

      // if right child exists, go right again
      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return result
  }

  // post-order
  // left, right, root
  dfsPostOrder() {
    let result = []

    const traverse = (node) => {
      // if left child exists, go left again
      if (node.left) traverse(node.left)

      // if right child exists, go right again
      if (node.right) traverse(node.right)

      // capture root node value
      result.push(node.value)
    }

    traverse(this.root)

    return result
  }

  // breadth first search - level by level
  // queue
  bts() {
    let result = []

    let queue = []

    queue.push(this.root)

    while (queue.length) {
      // take out the root node value
      let currentNode = queue.shift()

      // put the value in result
      result.push(currentNode.value)

      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    return result
  }
}
