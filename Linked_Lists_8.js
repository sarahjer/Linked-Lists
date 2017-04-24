// Loop Detection- Checks if a linked list has a loop and return the beginning of the loop


function hasCycle(head) {
    //if(head == null) return false;
    var current = head;
    var next = head;
    while(next != null && next.next != null){
        current = current.next;
        next = next.next.next;
        if(current == next){
            return next; 
        }        
    }   
    return false; 
}
