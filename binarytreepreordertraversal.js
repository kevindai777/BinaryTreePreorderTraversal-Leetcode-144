//Objective is to do a preorder traversal over a binary tree, using a dfs
//and bfs traversal.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(11)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 36)
tree.addLeftNode(tree.root.right, 15)


//O(n) dfs traversal
if (!root) {
    return []
}
let result = []

function dfs(node) {
    if (!node) {
        return
    }

    result.push(node.val)
    dfs(node.left)
    dfs(node.right)
}
dfs(tree.root)


//O(n) bfs traversal
if (!root) {
    return []
}
let stack = [tree.root]
let result = []

while (stack.length > 0) {
    let curr = stack.pop()
    result.push(curr.val)
    
    if (curr.right) {
        stack.push(curr.right)
    }
    if (curr.left) {
        stack.push(curr.left)
    }
}

return result