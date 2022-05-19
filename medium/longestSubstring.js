/* Given a string s, find the length of the longest substring without repeating characters.
Examples:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
*/

const longestSubString = (str) => {
    let map = {};
    let start = longest = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (map[char] >= 0) {
            start = Math.max(start, map[char]);
        }
        longest = Math.max(longest, i - start + 1);
        map[char] = i + 1; // store the index of the next char so as to not double count
    }
    return longest;
}