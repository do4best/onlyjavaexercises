class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
    }
    add(value) {
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            this.node.next = node;
        }
        this.tail = node;
        return this;
    }
    printAll() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
    get(value) {
        let current = this.head;
        let i = 0;
        while (i < value) {
            current = current.next;
            i++;
        }
        return current.data;
    }
}
let linked = new LinkedList();
console.log(linked)
linked.add(900)
linked.printAll()