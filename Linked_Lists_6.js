//checks if a linked list is a palindrome

function(l1){
	var ll2 = new SingleLinkedList();
	var ll1 = l1._root;
	console.log(ll1);
	while(ll1 != null){
		ll2.add(ll1.value);
		ll1 = ll1.pointer;
	}
	this.reverse(l1._root);
	console.log(ll2._root);
	console.log(ll._root);
	var l11 = l1._root;
	var l22 = ll2._root;
	while(l11 != null && l22 != null){
		if(l11.value == l22.value){
			l11 = l11.pointer;
			l22 = l22.pointer;
		} else {
			return false;
		}
		return true;
	}

} 				

reverse: function(node) {
	var next1 = null;
	while (true) {
		var next;
		if(next1 != null){
			next = next1;
		} else{
			next = node.pointer;
			node.pointer = null;
		}
		next1 = next.pointer;
		next.pointer = node;
		node = next;

		if (next1 === null) {
			this._root = node;
			break;
		}
	}
}

add: function(value) {
	var node = {
		value : value,
		pointer : null
	},
	current;
	if(this._root === null) {
		this._root = node;
	} else {
		current = this._root;
		while (true){
			if (current.pointer === null) {
				current.pointer = node;
				break;
			} else {
				current = current.pointer;
			}
		}
	}
}