/* The distance between a node in a Binary Tree and the tree's root is called the node's depth.
Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.

Example:
    tree =      1
              /   \
            2        3
          /   \    /   \
         4     5  6     7
       /   \   
      8    9 

    output = 16
    // The depth of the node with value 2, 3 is 1
    // The depth of the node with value 4, 5, 6, 7 is 2
    // The depth of the node with value 8, 9 is 3
*/

const nodeDepths = (root) => {
    let sum = 0;
    if (!root) return sum;
    const traverse = (node, depth = 1) => {
        if (node.left) {
            sum += depth;
            traverse(node.left, depth + 1);
        }
        if (node.right) {
            sum += depth;
            traverse(node.right, depth + 1);
        }
    }
    traverse(root);
    return sum;
}