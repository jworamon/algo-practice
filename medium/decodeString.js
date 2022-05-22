/* 
https://leetcode.com/problems/decode-string/

Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets 
is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

Examples:
    Input: s = "3[a]2[bc]"
    Output: "aaabcbc"

    Input: s = "3[a2[c]]"
    Output: "accaccacc"

    Input: s = "2[abc]3[cd]ef"
    Output: "abcabccdcdcdef"
*/

const decodeString = (s) => {
    const stack = [];

    // loop through 2 and push non ']' elements to stack
    for (const char of s) {
        if (char !== ']') {
            stack.push(char);
            continue;
        }

        // when we find ']' pop stack to get letter until we find '['
        let str = '';
        let cur = stack.pop();
        while (cur !== '[') {
            str = cur + str;
            cur = stack.pop();
        }

        // pop '[' and continue to pop to get number
        cur = stack.pop() // pop '['
        let num = '';
        while (!Number.isNaN(Number(cur))) {
            num = cur + num;
            stack.pop();
        }

        // when find another letter, push it back and push the decoded string
        if (cur) {
            stack.push(cur);
        }
        stack.push(str.repeat(Number(num)));
    }
    return stack.join('');
}