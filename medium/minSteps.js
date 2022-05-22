/* 
https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/

You are given two strings of the same length s and t. 
In one step you can choose any character of t and replace it with another character.

Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters 
with a different (or the same) ordering.

Examples: 
    Input: s = "bab", t = "aba"
    Output: 1
    Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.

    Input: s = "leetcode", t = "practice"
    Output: 5
    Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.

*/

const minSteps = (s, t) => {
    let map = {};
    let steps = 0;
    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }
    for (let char of t) {
        if (map[char]) {
            map[char]--;
        } else {
            steps++;
        }
    }
    return steps;
}