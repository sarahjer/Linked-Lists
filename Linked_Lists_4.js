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