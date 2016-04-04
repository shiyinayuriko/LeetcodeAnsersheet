/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var root = ListNode(0);
    var curNode = root;
    var ob = 0;
    while(l1.val || l2.val){
    	var newDig = l1.val+l2.val+ob;
    	ob = newDig / 10；
    	curNode.next = ListNode(newDig % 10);
    	curNode = curNode.next
    }
    return root.next;
};

 // console.log(twoSum([2, 7, 11, 15],9));