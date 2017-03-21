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

function partition1(p) {
	var node = this._root;
	var beforeStart = null;
	var beforeEnd = null;
	var afterStart = null;
	var afterEnd = null;

	while(node != null){
		var next = node.pointer;
		node.pointer = null;
		if(node.value < p){
			if(beforeStart == null){
				beforeStart = node;
				beforeEnd = beforeStart;
			} else {
				beforeEnd.pointer = node;
				beforeEnd = node;
			}
		} else {
			if(afterStart == null){
				afterStart = node;
				afterEnd = afterStart;
			} else {
				afterEnd.pointer = node;
				afterEnd = node;
			}
		}
		node = next;
	}
	if(beforeStart == null){
		return afterStart;
	}

	beforeEnd.pointer = afterStart;
	return beforeStart;
}