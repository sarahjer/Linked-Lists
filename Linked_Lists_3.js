// Deletes middle node with access only to that node

function deleteMidNode(node) {
		var n = this.findMidNode(node, this._root);
		if(n == null || n.pointer == null){
			return false;
		} 
		var next = n.pointer;
		n.value = next.value;
		n.pointer = next.pointer;
		return true;
	}