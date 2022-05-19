/* Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSum = (arr, target) => {
    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let diff = target - num;
        if (hash[diff] >= 0) {
            return [hash[diff], i];
        }
        hash[num] = i;
    }
    return [];
}