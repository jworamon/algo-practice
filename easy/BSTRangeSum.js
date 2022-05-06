/* 
Given the root node of a binary search tree and two integers low and high, 
return the sum of values of all nodes with a value in the inclusive range [low, high].
Examples:
    Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
    Output: 32
    Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

    Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
    Output: 23
    Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
*/

const BSTRangeSum = (root, low, high) => {
    let sum = 0;
    // if root node is null, sum is 0
    if (!root) return sum;

    // if current node value is more than low, traverse to the left node of current node
    if (root.val > low) {
        sum += BSTRangeSum(root.left, low, high)
    }

    // if current node value is within the low-high range, add the value to the sum
    if (root.val >= low && root.val <= high) {
        sum += root.val;
    }

    // if current node value is less than high, traverse to the right node of current node
    if (root.val < high) {
        sum += BSTRangeSum(root.right, low, high)
    }
    
    return sum;
}