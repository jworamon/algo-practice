class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const addTwoNumbers = (list1, list2) => {
    const resultHead = new ListNode(0);
    let current = resultHead;
    let addToNext = 0;
    
    while (list1 || list2) {
        // if either list is done, add a new temp node with value 0
        list1 = list1 || new ListNode(0);
        list2 = list2 || new ListNode(0);
        
        let sum = list1.val + list2.val + addToNext;
        if (sum >= 10) {
            current.next = new ListNode(sum % 10);
            addToNext = 1;
        } else {
            current.next = new ListNode(sum);
            addToNext = 0;
        }
        list1 = list1.next;
        list2 = list2.next;
        current = current.next;
    }
    // the list end but there's leftover addToNext
    if (addToNext) {
        current.next = new ListNode(1);
    }
    return resultHead.next;
}