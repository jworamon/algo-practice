/* 
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again 
by continuously following the next pointer. Internally, pos is used to denote the index of the node 
that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
*/

// Time: O(n) Space: O(n)
const hasCycle_1 = (head) => {
    let set = new Set();
    let current = head;
    while (current) {
        if (set.has(current)) return true;
        set.add(current);
        current = current.next;
    } 
    return false;
}

// Time: O(n) Space: O(1)
const hasCycle_2 = (head) => {
    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (!fast || !fast.next) return false; // fast will eventually reach the end if there's no cycle.
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}