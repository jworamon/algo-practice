/*
Given the root of a binary search tree, rearrange the tree in in-order so that 
the leftmost node in the tree is now the root of the tree, 
and every node has no left child and only one right child.
Examples:
    Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
    Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

    Input: root = [5,1,7]
    Output: [1,null,5,null,7]
*/

const increasingBST = (root) => {
    let newRoot = null;
    let newTree = null;
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        if (!newRoot) {
            newRoot = newTree = node;
        } else {
            newTree.right = node;
            node.left = null;
            newTree = newTree.right;
        }
        traverse(node.right);
    }
    traverse(root);
    return newRoot;
}