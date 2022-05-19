/*  A phrase is a palindrome if, after converting all uppercase letters 
into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters 
include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

const isPalindrome = (str) => {
    str = str.replace(/[^A-Za-z0-9]/g, ''); // replace non-alphanumeric with ''
    str = str.toLowerCase();
    
    let start = 0;
    let end = str.length - 1;
    while (start <= end) {
        if (str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
}