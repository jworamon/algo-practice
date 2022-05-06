/*
You are given the root of a binary search tree (BST) and an integer val.
Find the node in the BST that the node's value equals val and 
return the subtree rooted with that node. If such a node does not exist, return null.
Examples:
    Input: root = [4,2,7,1,3], val = 2
    Output: [2,1,3]

    Input: root = [4,2,7,1,3], val = 5
    Output: []  
*/

// iterative
const searchBST_it = (root, val) => {
    if (!root) return null;
    let current = root;
    while (current) {
        if (current.val === val) return current;
        if (current.val > val) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null;
}

//recursive
const searchBST_re = (root, val) => {
    // base cases
    if (!root) return null;
    if (root.val === val) return root;

    // recursive cases
    if (root.val > val) {
        return searchBST_re(root.left, val);
    }
    return searchBST_re(root.right, val);
}