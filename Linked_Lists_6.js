function(l1, l2){
	console.log("l1:" + l1.value);
	console.log("l2:" + l2.value);
	while(l1 != null && l2 != null){
		if(l1.value == l2.value){
			l1 = l1.pointer;
			l2 = l2.pointer;
		} else {
			console.log(false);
		}
		console.log(true);
	}
}		