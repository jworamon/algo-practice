/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, 
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

// Time: O(N^2) Space: O(N)
const threeSum = (nums) => {
    const result = [];
    if (nums.length < 3) return result;

    nums = nums.sort((a, b) => a - b);
    const target = 0; // can be anything but for this prompt it's 0

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) break; 
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates
        let startIdx = i + 1;
        let endIdx = nums.length - 1;
        while (startIdx < endIdx) {
            let sum = nums[i] + nums[startIdx] + nums[endIdx];
            if (sum === target) {
                result.push([nums[i], nums[startIdx], nums[endIdx]]);
                // check and skip duplicates
                while (nums[startIdx] === nums[startIdx + 1]) startIdx++;
                while (nums[endIdx] === nums[endIdx - 1]) endIdx++;
                startIdx++;
                endIdx--;
            } else if (sum > target) {
                endIdx--;
            } else {
                startIdx++;
            }
        }
    }
    return result;
}