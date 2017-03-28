function sumLists(l1, l2){
	var current1 = l1._root;
	var current2 = l2._root; 
	var sum;
	var carry = 0;
	var ll3 = new SingleLinkedList();
	while(current1 != null && current2 != null){
		 sum = current1.value + current2.value + carry;
		 carry = sum >= 10 ? 1 : 0; 
		 if(sum >= 10 ){
		 	sum = sum % 10;
		 }  
		 ll3.add(sum);
		 current1 = current1.pointer;
		 current2 = current2.pointer;	 		 
	}
	if(carry > 0){
		ll3.add(carry);
	}
	return ll3;
}

function sumListsR(l1, l2) {
	var current1 = l1._root;
	var current2 = l2._root; 
	var sum;
	var carry = 0;
	while(current1.pointer != null){
		current1 = current1.pointer;
		current2 = current2.pointer;
	}
	sum = current1.value + current2.value + carry;
	carry = sum >= 10 ? 1 : 0; 
	if(sum >= 10 ){
		sum = sum % 10;
	} 
}