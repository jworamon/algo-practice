/* You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. 
The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

// Time: O(N + M) Space: O(1)
const mergeTwoLists = (list1, list2) => {
    let mergedHead = { val: -1, next: null };
    let current = head;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 || list2;
    return mergedHead.next;
}