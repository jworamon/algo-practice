/* 
Write a function that takes a Binary Tree and returns a list of
its branch sums orders from leftmost brach sum to rightmost branch sum.

A branch sum is the sum of all values in a Binary Tree branch (path of nodes in 
a tree starting from root to left node)

Example:
    tree =      1
              /   \
            2        3
          /   \    /   \
         4     5  6     7
       /   \  /    
      8    9 10

    output = [15, 16, 18, 10, 11]
    // 15 == 1 + 2 + 4 + 8
    // 16 == 1 + 2 + 4 + 9
    // 18 == 1 + 2+ 5 + 10
    // 10 == 1 + 3 + 6
    // 11 == 1 + 3 + 7
*/

// Time: O(N) Space: O(N)
const branchSum = (root) => {
    const sums = [];
    return calculatingSums(root, 0, sums);
}

const calculatingSums = (node, currentSum, sums) => {
    if (!node) return;
    const newSum = currentSum + node.val;

    // if the node is a left, push the newSum to sums array then return
    if (!node.left && !node.right) {
        sums.push(newSum);
        return;
    }
    calculatingSums(node.left, newSum, sums);
    calculatingSums(node.right, newSum, sums);
}

