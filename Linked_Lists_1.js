//  removes duplicates from an unsorted linked list

function() {
	var current = this._root;
	var obj = {};
	var prev = null;
	while(current != null){
		var ch = current.value;
		if(!obj[ch]){
			prev = current;
			obj[ch] = true;
		} else {
			prev.pointer = current.pointer;
		}
		current = current.pointer;
		if(current == null){
			break;
		}
	}
	console.log(obj);
}