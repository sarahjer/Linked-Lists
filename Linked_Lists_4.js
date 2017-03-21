// Partitions a linked list around a value p such that all nodes greater than value p are to its right and all values
// lesser are to its left. The partition value need not appear between the left and right partitions.

function partition(node, p) {
	var head = node;
	var tail = node;
	while(node != null){
		var next = node.pointer;
		if(node.value < p) {
			node.pointer = head;
			head = node;
		} else {
			tail.pointer = node;
			tail = node;
		}
		node = next;
	}
	tail.pointer = null;
	return head;
}