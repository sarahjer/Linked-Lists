// returns kth element from the last

function(k) {
	current = this._root;
	var j = 0;
	while(true){
		if(k != j){
			current = current.pointer;
			j++;
		} else {
			break;
		}
		var next = current;
	}
	var current1 = this._root;
	while(true){
		if(next != null){
			current1 = current1.pointer;
			next = next.pointer;
		} else {
			break;
		}
	}
	console.log(current1);
}