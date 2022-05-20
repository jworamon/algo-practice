const reversedLinkedList = (head) => {
    let [prev, current] = [null, head];
    while (current) {
        [current.next, prev, current] = [prev, current, current.next];
    }
    return prev;
}

const reversedList = (head) => {
    let current = head;
    let prev = null;
    while (current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev;
}