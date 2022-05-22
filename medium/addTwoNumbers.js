class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// if list is giving the least significant digit as head
// i.e.     l1: 3 -> 4 -> 2 -> 7 (=7243)
//          l2: 4 -> 6 -> 5 (=564)
// return   l3: 7 -> 0 -> 8 -> 7 (=7807)

const addTwoNumbers1 = (list1, list2) => {
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

// if list is giving the most significant digit as head
// i.e.     l1: 7 -> 2 -> 4 -> 3 (=7243)
//          l2: 5 -> 6 -> 4 (=564)
// return   l3: 7 -> 8 -> 0 -> 7 (=7807)

const addToNumbers2 = (list1, list2) => {
    const stack1 = [];
    const stack2 = [];
    while (list1) {
        stack1.push(list1.val);
        list1 = list1.next;
    }
    while (list2) {
        stack2.push(list2.val);
        list2 = list2.next;
    }

    let list3 = new ListNode(0);
    while (stack1.length || stack2.length) {
        let sum = 0;
        let num1 = stack1.pop() || 0; // assign 0 if no more num in stack
        let num2 = stack2.pop() || 0; 
        sum = num1 + num2 + list3.val;
        list3.val = sum % 10;
        
        let head = new ListNode(Math.floor(sum / 10)); // add 1 to head.val if sum is more than 10
        head.next = list3;
        list3 = head;
    }

    return list3.val === 0 ? list3.next : list3;
}