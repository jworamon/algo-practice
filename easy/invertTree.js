/* 
Given the root of a binary tree, invert the tree, and return its root.
Examples:
    Input: root = [4,2,7,1,3,6,9]
    Output: [4,7,2,9,6,3,1]

    Input: root = [2,1,3]
    Output: [2,3,1]

    Input: root = []
    Output: []
*/

// Time: O(N) Space: O(N)
const invertTreeRecursion = (root) => {
    if (root === null) return root;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
}

// Time: O(N) Space: O(N)
const invertTreeBFS = (root) => {
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (node !== null) {
            [node.left, node.right] = [node.right, node.left];
            queue.push(node.left, node.right);
        }
    }
    return root;
}

// Time: O(N) Space: O(N)
const invertTreeDFS = (root) => {
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        if (node !== null) {
            [node.left, node.right] = [node.right, node.left];
            stack.push(node.left, node.right);
        }
    }
    return root;
}