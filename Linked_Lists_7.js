// find if two linked lists are intersecting, and return thr point of intersection

// get tail and size
function gettailandsize(head){
	var current = head;
	var size = 1;
	if(current.next != null){
		size++;
		current = current.next;
	}
	var arr = [current, size]
	return arr;
}

function main(head1,head2){
	var result1 = gettailandsize(head1);
	var result2 = gettailandsize(head2);
	
}