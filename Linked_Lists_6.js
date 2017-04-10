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