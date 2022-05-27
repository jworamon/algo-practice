/* 
Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as:
    a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
*/

const isBalanced = (root) => {
    const DFS = (node) => {
        if (!node) return;
        let left = 1 + DFS(node.left);
        let right = 1 + DFS(node.right);
        if (Math.abs(left - right) > 1) {
            return Infinity;
        }
        return Math.max(left, right);
    }
    return DFS(root) === Infinity ? false : true;
}