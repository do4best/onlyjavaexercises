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
    insertAt(index, data) {
        if (index === 0) {
            const node = new Node(data);
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let previous = null;
            let i = 0;
            while (i < index) {
                previous = current;
                current = current.next;
                i++;
            }
        }
        return this;
    }
    totalLength() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }
}
let linked = new LinkedList();
console.log(linked)
linked.add(900)
linked.printAll()
linked.insertAt(0, "Great")
console.log(linked.totalLength())