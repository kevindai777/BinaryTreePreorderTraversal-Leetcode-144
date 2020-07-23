//Objective is to do a preorder traversal over a binary tree, using a dfs
//and bfs traversal.


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
let stack = [root]
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