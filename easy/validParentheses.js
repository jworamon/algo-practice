/* Given a string s containing just the characters 
'(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
    - Open brackets must be closed by the same type of brackets.
    - Open brackets must be closed in the correct order.

*/

const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
}

const validParentheses = (str) => {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (brackets[char]) {
            stack.push(brackets[char]);
        } else {
            if (char !== stack[stack.length - 1]) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}