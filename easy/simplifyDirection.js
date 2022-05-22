const directions = {
    'N': 'S',
    'S': 'N',
    'E': 'W',
    'W': 'E'
}

// NSNEWW -- return NW
const simplifyDirection = (s) => {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (!stack[stack.length - 1]) {
            stack.push(s[i]);
        } else {
            let prev = stack[stack.length - 1];
            if (directions[s[i]] === prev) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
    }
    return stack.join('');
}