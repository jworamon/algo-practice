/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
*/

// Time: O(N) Space: O(N)
const isAnagram = (s, t) => {
    if (t.length !== s.length) return false;

    let bank = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        bank[char] = bank[char] + 1 || 1;
    }
    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (!bank[char]) return false;
        bank[char]--;
    }
    return true;
}
