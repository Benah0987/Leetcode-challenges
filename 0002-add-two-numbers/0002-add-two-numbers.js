/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    const dummy = new ListNode(); // Create a dummy node to simplify the code
    let current = dummy; // Initialize a current pointer at the dummy node

    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        const total = val1 + val2 + carry;
        carry = Math.floor(total / 10);

        current.next = new ListNode(total % 10);

        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }

        current = current.next;
    }

    return dummy.next; // Skip the dummy node and return the actual result
};

// Example usage:
// Construct linked lists using the provided ListNode definition
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
const result = addTwoNumbers(l1, l2);

// Helper function to convert the result linked list to an array
function listToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

console.log(listToArray(result)); // Output: [7, 0, 8]
